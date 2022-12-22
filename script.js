const container = document.querySelector('.container');

// kotak satu
const kotakSatu = document.querySelector('.kotak-satu');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');

// array
const p1p3 = [p1, p3];

// tap
const tap = document.querySelector('.tap');

// kotak dua
const kotakDua = document.querySelector('.kotak-dua');
// teks
const selamat = document.querySelector('.selamat');
const hari = document.querySelector('.hari');
const guru = document.querySelector('.guru');
const nasional = document.querySelector('.nasional');

// img
const logo = document.querySelector('.logo');
const hero = document.querySelector('.hero');

window.onload = () => {
    setTimeout(() => {
        kotakSatu.classList.toggle('skala-satu');
        kotakSatu.classList.toggle('opasiti-satu');
        setTimeout(() => {
            p1p3.forEach((s) => {
                s.classList.toggle('y-nol');
                s.classList.toggle('opasiti-satu');
            });
            setTimeout(() => {
                p2.classList.toggle('x-nol');
                p2.classList.toggle('opasiti-satu');
                setTimeout(() => {
                    tap.classList.toggle('skala-satu');
                    tap.classList.toggle('opasiti-satu');

                    kotakSatu.classList.toggle('opasiti-satu');
                    kotakSatu.classList.toggle('opasiti-sengah');

                    tap.onclick = function() {
                        this.classList.toggle('skala-satu');
                        this.classList.toggle('opasiti-satu');

                        kotakSatu.classList.toggle('skala-satu');
                        kotakSatu.classList.toggle('opasiti-sengah');

                        kotakDua.classList.toggle('opasiti-satu');
                        kotakDua.classList.toggle('x-nol');

                        container.style.backgroundColor = '#fff';

                        setTimeout(() => {
                            selamat.classList.toggle('opasiti-satu');
                            selamat.classList.toggle('x-nol');

                            setTimeout(() => {
                                hari.classList.toggle('opasiti-satu');
                                hari.classList.toggle('x-nol');

                                setTimeout(() => {
                                    guru.classList.toggle('opasiti-satu');
                                    guru.classList.toggle('x-nol');

                                    setTimeout(() => {
                                        nasional.classList.toggle('opasiti-satu');
                                        nasional.classList.toggle('x-nol');

                                        logo.classList.toggle('opasiti-satu');
                                        hero.classList.toggle('opasiti-satu');
                                    }, 500);
                                }, 500);
                            }, 500);
                        }, 500);
                    }
                }, 5000);
            }, 500);
        }, 500);
    }, 2000);
}