(() => {
  const base = new URL('.', document.currentScript.src);
  const rows = [
    ['Bia','nongtangmo20','66952632882','Thai, English',9500,10,'5 weeks',5500,5,'4 weeks','1',1200],
    ['Bert','begoodguy9','66909193462','Thai, English',9500,10,'5 weeks',5500,5,'4 weeks','1',1200],
    ['Beat','kraisak-06','66641955997','Thai',7500,12,'5 weeks',4500,12,'5 weeks','2–3',900],
    ['Naw','0865535204','66865535204','Thai',9000,15,'60 days',6000,15,'45 days','2',900],
    ['Kim','wakim2531','66801485539','Thai, English',10000,12,'5 weeks',5000,12,'5 weeks','2–4',1000],
    ['Kwan','naprai','66891887014','Thai',10000,15,'5 weeks',5000,12,'5 weeks','2–4',1000],
    ['Pana','0896525005','66896525005','Thai',10000,15,'5 weeks',4500,15,'5 weeks','2–3',1000],
    ['Owen','0656259989','66656259989','Thai, English, Filipino',10000,12,'5 weeks',7000,12,'5 weeks','2–3',1300],
    ['Nueng','Mgis003','66807788841','Thai, English',8000,10,'4 weeks',5000,10,'4 weeks','2–3',1200],
    ['Best','Narutcha24','66929725371','Thai',8000,12,'60 days',10000,10,'60 days','1','700–1,200'],
    ['Pino','pinothai','66842684966','Thai, English, Italian',10000,12,'4 weeks',5000,12,'4 weeks','3–4',1000],
    ['Ann','annie0918208415','66623462477','Thai, English',12500,15,'5 weeks',7500,15,'5 weeks','2–3',1300],
    ['Tong',null,'66828356425','Thai, English',9000,12,'5 weeks',6000,12,'2 weeks','2',1000],
    ['Boon','somboonasa','66826259397','Thai, English',10000,10,'5 weeks',7000,10,'5 weeks','2',1200],
  ];
  const qualifications = [[],[],
    ['Fitness Nutrition Specialist','Sports Nutrition for Bodybuilders','Breathing Techniques for Exercise','Bodybuilding for All Ages – Certified by the Bodybuilding and Fitness Association of Thailand'],
    ['BTU Sports Sciences 4Y (2018)','Smart Personal Fitness Trainer 100 hr. (2018)','Functional Training (2018)','The Anchor and Slings Movement (2019)','Fixme Sports Massage (2019)','KT Sports Taping Physio Trust Movement (2019)','Running Specialist (2020)','Made Simple In Shoulder Pain (2024)'],
    ['Hatha Yoga Teacher (200 hrs.) Training Course 2017','Anatomy Course 2016, 2024','Myofascial Release for Trainer 2019','National Bodybuilding Coaching Certification (NBCC) 2020','Postural Reposition Reciprocal Alternative Training 2020','Anatomy for Massage 2022','Thai massage for health 2022'],
    ['NGA Master trainers Certification Course 2016','Exercise Nutrition & Supplements (8 Hr.) Smartgym fitness (Thailand) 2016','Anatomy Knowledge Course 2024','Intensive Yoga Asana Course (20 hr.) 2025','Muscle And Physique Challenge (4th), 2015','Muscle And Physique Contest (4th), 2015','Mr. Thailand (5th), 2016','Muscle And Physique Contest (2nd), 2016','Mr. Thailand (5th), 2017','Thailand Open Master Games (3rd), 2024'],
    ['1st Place Winner – Thailand Open Masters Games, 6th Edition','2nd Runner-Up – PCA Thailand Championships','Competitor – Mr. Thailand 2026','Certified Personal Trainer – Successfully completed the Certificate of Completion training program for Personal Trainers'],
    ['Certified functional training specialists','Strength and conditioning coach','Certified personal trainer (ACE) 2015','Certified PT (Ff) 2013','Suspension training (TRX) Certified Corrective specialist','Mfec 2025 certificate no.0801.4587'],
    ['SMART Certified Personal Fitness Trainer 100 hrs. (2019)','National Bodybuilding Coaching Certificate Course (NBCC 2021)','Massage & Movement Perspective (2025)','X4TRO Coaching Development Program Padel (2026)'],
    ['BTU sports sciences 4 year','Professional footballer 4 years ago','Sports massage therapist course of Spain','Stretching therapist course of Spain','Basic treatment of sports injuries','Performance (Performance Training)'],
    ['Certified Fitness & Bodybuilding Coach | Strength, hypertrophy & body composition','Certified Functional & Postural Coach | Mobility, posture & injury prevention','Certified Calisthenics Coach | Bodyweight strength, control & skills'],
    ['5th Thailand International Elite Physique championship (2022)','3rd PCA Thailand Model (2022)','3rd PCA Thailand Masters (2022)','1st Thailand Southern (2025)','5th MR. Thailand (2026)','Anatomy for massage (2022)','National bodybuilding coaching Certificate course (NBCC 2026)','X4TRO coaching Diploma Program Padel (2026)']
  ];
  const money = value => typeof value === 'number' ? value.toLocaleString('en-US') : value;
  const languageFlags = { Thai: '🇹🇭', English: '🇬🇧', Filipino: '🇵🇭', Italian: '🇮🇹' };
  const renderLanguages = languages => languages.split(', ').map(language =>
    `<span class="cp-language-flag" role="img" aria-label="${language}" title="${language}">${languageFlags[language]}</span>`
  ).join('');
  // Each photo has its own source rectangle; only the human photograph is shown.
  function portrait(index, second = false) {
    if (index >= 12) {
      const name = rows[index][0];
      if (name === 'Tong' && second) return `<img class="cp-photo" src="${new URL('coach-tong-gym.png',base)}" alt="Coach Tong with a gym background" />`;
      return `<img class="cp-photo" src="${new URL(`coach-${name.toLowerCase()}${second||name==='Boon'?'-2':''}.jpg`,base)}" alt="Coach ${name} ${second?'second photo':'portrait'}" />`;
    }
    const y = second ? 443 : 28;
    const x = second ? 22 : 28;
    return `<svg class="cp-photo" viewBox="${x} ${y} 376 376" role="img" aria-label="Coach ${rows[index][0]} ${second ? 'training photo' : 'portrait'}"><image href="${new URL(`posters/coach-${index+1}.jpg`,base)}" width="1080" height="1080" /></svg>`;
  }
  function card(index, expanded = false) {
    const [name,line,phone,languages,price,sessions,expiry,group,groupSessions,groupExpiry,people,single] = rows[index];
    const special = index === 9;
    const article = document.createElement('article');
    article.className = 'cp-card';
    if (!expanded) article.classList.add('cp-card-clickable');
    article.dataset.coach = name;
    article.innerHTML = `<div class="cp-heading">${portrait(index)}<div class="cp-title"><div class="cp-role ${special?'cp-role-long':''}">${index<2?'MUAY THAI <b>COACH</b>':special?'PERSONAL TRAINER<br>SPORTS THERAPIST<br>FOOTBALL <b>COACH</b>':'PERSONAL <b>TRAINER</b>'}</div><h3>COACH ${name.toUpperCase()}</h3><p class="cp-languages" aria-label="Languages">${renderLanguages(languages)}</p></div></div>
      <div class="cp-details"><div class="cp-bio">${name==='Boon'?'':(index<2||index>=12)?portrait(index,true):`<h4>QUALIFICATIONS</h4><ul>${qualifications[index].map(q=>`<li>${q}</li>`).join('')}</ul>`}</div><div class="cp-offers"><div><h4>PRIVATE CLASS${special?' (PT)':''}</h4><p><strong>฿${money(price)}</strong> / ${sessions} sessions / person</p><p>Expires in ${expiry}<br>1 person</p></div><div><h4>${special?'SPORTS THERAPIST':'GROUP CLASS'}</h4>${special?'<p>฿1,200 / session / person</p>':''}<p><strong>฿${money(group)}</strong> / ${groupSessions} sessions / person</p><p>Expires in ${groupExpiry}<br>${people} ${people==='1'?'person':'persons'}</p></div></div></div>
      <div class="cp-single">1 TIME &nbsp; ฿${money(single)} / PERSON</div>
      <div class="cp-contacts"><strong>CONTACT US</strong><a href="https://line.me/ti/p/~${encodeURIComponent(line)}" target="_blank" rel="noopener noreferrer" aria-label="Contact Coach ${name} on LINE"><span class="cp-icon">LINE</span><span>${line}</span></a><a href="https://wa.me/${phone}" target="_blank" rel="noopener noreferrer" aria-label="Contact Coach ${name} on WhatsApp"><span class="cp-icon" aria-hidden="true">☎</span><span>+${phone}</span></a></div>
      ${expanded?'':`<button class="cp-expand" type="button" aria-label="Enlarge Coach ${name}'s profile"></button>`}`;
    article.querySelector('.cp-expand')?.addEventListener('click',()=>open(index));
    if (!line) {
      // A phone number is not a verified LINE username; retain the known call link.
      const contact = article.querySelector('.cp-contacts a');
      contact.href = `tel:+${phone}`;
      contact.setAttribute('aria-label',`Call Coach ${name}`);
      contact.innerHTML = `<span class="cp-icon">CALL</span><span>+${phone}</span>`;
    }
    return article;
  }
  const dialog = document.createElement('dialog');
  dialog.className = 'cp-dialog';
  dialog.setAttribute('aria-label','Coach profile');
  document.body.append(dialog);
  function open(index) {
    dialog.replaceChildren();
    const close = document.createElement('button');
    close.className='cp-close'; close.textContent='Close ×';
    close.addEventListener('click',()=>dialog.close());
    dialog.append(close,card(index,true)); dialog.showModal();
  }
  dialog.addEventListener('click',event=>{if(event.target===dialog) { const r=dialog.getBoundingClientRect(); if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) dialog.close(); }});
  const grid = document.querySelector('#coaches .coach-grid');
  if(grid) grid.replaceChildren(...rows.map((_,index)=>card(index)));
})();
