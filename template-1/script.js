const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible'));
    }, { threshold: .12 });
    document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

    const modal = document.querySelector('#gallery-modal');
    const modalImage = modal.querySelector('img');
    const modalClose = modal.querySelector('.modal-close');
    let galleryTrigger;
    const closeModal = () => {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
      galleryTrigger?.focus();
    };
    document.querySelectorAll('[data-gallery]').forEach(button => {
      button.addEventListener('click', () => {
        const image = button.parentElement.querySelector('img');
        galleryTrigger = button;
        modalImage.src = image.src;
        modalImage.alt = image.alt;
        modal.classList.add('active');
        document.body.classList.add('modal-open');
        modalClose.focus();
      });
    });
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', event => event.target === modal && closeModal());
    document.addEventListener('keydown', event => {
      if (!modal.classList.contains('active')) return;
      if (event.key === 'Escape') closeModal();
      if (event.key === 'Tab') {
        event.preventDefault();
        modalClose.focus();
      }
    });

    document.querySelector('#lead-form').addEventListener('submit', event => {
      event.preventDefault();
      const name = document.querySelector('#name').value.trim();
      const phone = document.querySelector('#phone').value.trim();
      const message = document.querySelector('#message').value.trim();
      const text = `Olá, sou ${name}. Tenho interesse no apartamento cód. 55128 do Residencial Marriot. Meu telefone é ${phone}.${message ? ` ${message}` : ''}`;
      window.open(`https://wa.me/5551980448075?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    });