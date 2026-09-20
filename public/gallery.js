class GymGallery extends HTMLElement {
  async connectedCallback() {
    if (this.ready) return;
    this.ready = true;
    this.innerHTML = '<p role="status">Loading photos…</p>';
    try {
      const response = await fetch('/gallery-albums.json');
      if (!response.ok) throw new Error('Gallery unavailable');
      this.albums = await response.json();
      this.innerHTML = `<div class="gallery-filters" aria-label="Photo albums"></div><div class="gallery-grid"></div><button class="gallery-more" type="button">Show more photos</button><dialog class="gallery-lightbox" aria-label="Photo viewer"><button class="gallery-close" type="button" aria-label="Close photo">×</button><button class="gallery-prev" type="button" aria-label="Previous photo">‹</button><img alt=""><button class="gallery-next" type="button" aria-label="Next photo">›</button><p aria-live="polite"></p></dialog>`;
      this.dialog = this.querySelector('dialog');
      this.albums.forEach((album, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = album.label;
        button.addEventListener('click', () => this.selectAlbum(index));
        this.querySelector('.gallery-filters').append(button);
      });
      this.querySelector('.gallery-more').onclick = () => this.addPhotos();
      this.querySelector('.gallery-close').onclick = () => this.dialog.close();
      this.querySelector('.gallery-prev').onclick = () => this.openPhoto(this.current - 1);
      this.querySelector('.gallery-next').onclick = () => this.openPhoto(this.current + 1);
      this.dialog.addEventListener('click', event => { if (event.target === this.dialog) this.dialog.close(); });
      this.dialog.addEventListener('keydown', event => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          this.openPhoto(this.current + (event.key === 'ArrowRight' ? 1 : -1));
        }
      });
      this.dialog.addEventListener('close', () => { document.body.style.overflow = ''; });
      window.addEventListener('hashchange', () => this.dialog.close());
      this.selectAlbum(0);
    } catch {
      this.innerHTML = '<p>Photos could not be loaded. <a href="https://drive.google.com/drive/folders/18isye5Ut7rdwHvEFKa4Q1rUT9gJHdeMD" target="_blank" rel="noopener">View the photo albums</a></p>';
    }
  }
  selectAlbum(index) {
    this.album = this.albums[index];
    this.shown = 0;
    this.querySelector('.gallery-grid').replaceChildren();
    this.querySelectorAll('.gallery-filters button').forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
    this.addPhotos();
  }
  imageUrl(photo, width) { return (width <= 800 ? photo.thumbnail : photo.src) || `https://lh3.googleusercontent.com/d/${photo.id}=w${width}`; }
  addPhotos() {
    const end = Math.min(this.shown + 24, this.album.photos.length);
    for (let index = this.shown; index < end; index++) {
      const photo = this.album.photos[index];
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('aria-label', `Enlarge photo ${index + 1}, ${this.album.label}`);
      const image = document.createElement('img');
      image.referrerPolicy = 'no-referrer';
      image.src = this.imageUrl(photo, 800);
      image.alt = `Success Gym — ${this.album.label}, photo ${index + 1}`;
      image.loading = 'lazy';
      image.decoding = 'async';
      image.onerror = () => { button.textContent = 'Photo unavailable'; };
      button.append(image);
      button.onclick = () => this.openPhoto(index);
      this.querySelector('.gallery-grid').append(button);
    }
    this.shown = end;
    this.querySelector('.gallery-more').hidden = end === this.album.photos.length;
  }
  openPhoto(index) {
    this.current = (index + this.album.photos.length) % this.album.photos.length;
    const image = this.dialog.querySelector('img');
    image.referrerPolicy = 'no-referrer';
    image.src = this.imageUrl(this.album.photos[this.current], 2000);
    image.alt = `Success Gym — ${this.album.label}, photo ${this.current + 1}`;
    this.dialog.querySelector('p').textContent = `${this.current + 1} / ${this.album.photos.length} · ${this.album.label}`;
    if (!this.dialog.open) this.dialog.showModal();
    document.body.style.overflow = 'hidden';
  }
}
customElements.define('gym-gallery', GymGallery);
