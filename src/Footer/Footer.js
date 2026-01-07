import React from 'react';
export default function Footer() {
  const ha = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  };
  return (<>
    <div className='text-flex'>
      <div class="containerdivs">
        < div class="containerdivs-child">
          <div className='text-right    foottext   right-text'>

            <ul >
             <li className='t-pardisan '>

              </li>
              <li class="opacity-low left-arrow">
                دوره های پیشرفته زبان انگلیسی
              </li>
              <li class="opacity-low left-arrow">
                اولین مجموعه آموزش هیبرید
              </li>
              <li class="opacity-low left-arrow">
                15سال سابقه در آموزش زبان 
              </li>
              <li class="opacity-low left-arrow">
                آموزش آنلاین زبان انگلیسی
              </li>
            </ul>
          </div>
         <div className='text-center   foottext'>
            <li class="benefit">
            </li>
            <ul>
              <li class="opacity-low left-arrow">
                آموزش با برترین متدهای روز دنیا
              </li>
              <li class="opacity-low left-arrow">
                دربرگیری تمامی گروه های سنی
              </li>      <li class="opacity-low left-arrow">
                استفاده از مجرب ترین اساتید
              </li>
              <li class="opacity-low   left-arrow">
                محیط آموزشی پویا و صمیمی
              </li>
            </ul>
          </div>
          <div className='text-left   foottext'>

            <ul>
              <li class="ways-contact">

              </li>
              <li class="opacity-low location">
                آدرس آموزشگاه : میدان ولیعصر - کوچه زارعی
              </li>
              <li class="opacity-low email">
                ارتباط بامدیریت
                baghamoh3@gmail.com
              </li>
              <li class="opacity-low  phone">
                شماره تماس:
              </li>

              <li class="text-90 ">
                021-88212221
              </li>

            </ul>
          </div>
          <div className='text-left   foottext'>
            <ul>
              <li class="where-are">
              </li>
            </ul>
          </div>
        </div>

        <ul class="list-unstyled list-inline">
       </ul>
        <div class="text-400 text-center">
          <p>
           <a href="#" class=" myname">حراج لباس پاییزه  <svg
              class="bi bi-suit-heart-fill"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#df4485"
              viewBox="0 0 16 16"
            >
              <path
                d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
              >       </path>
            </svg>
              تخفیفات ویژه
              در نمونه کار دیگر محمد باغانی
              <x>
              </x>
              <a class='mohammad-rezume'

                href='https://shopy.liara.run/list' title='یک نمونه کار دیگه من'>
                فروشگاه لباس

              </a>
              <a href="https://jobinja.ir/user/mohammad-baghani">
                <img class='mohammad-image' src="m.jpg" title='من : محمد باغانی'>
                </img>
              </a>
            </a>
          </p>
        </div>
      </div>
     <div className='parent-map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.575819733252!2d51.402071775275964!3d35.712054628281045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0116779b0607%3A0x620ec3b39b6ad792!2z2KLZhdmI2LLYtNqv2KfZhyDYstio2KfZhiDZvtix2K_bjNiz2KfZhiDYtNi52KjZhyDZiNmE24zYudi12LE!5e0!3m2!1sen!2slv!4v1705856083682!5m2!1sen!2slv" className='map'>
        </iframe>
      </div>
    </div>

  </>
  )
}