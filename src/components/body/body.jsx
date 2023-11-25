import React, { useState, useRef } from 'react';
import '../body/body.css';
import Carrucel_1 from '../../img/carrucel_1.jpg';
import Carrucel_2 from '../../img/carrucel_2.jpg';
import Carrucel_3 from '../../img/carrucel_3.jpg';
import Carrucel_4 from '../../img/carrucel_4.jpg';
import Carrucel_5 from '../../img/carrucel_5.jpg';
import Carrucel_6 from '../../img/carrucel_6.jpg';
import Custom_design from '../../img/custom_design.jpg';
import Pool_Construction from '../../img/pool_construction.jpg';
import Remodeling from '../../img/remodeling.jpg';
import Testimonial_1 from '../../img/testimonial_1.jpg';
import Testimonial_2 from '../../img/testimonial_2.jpg';


export const Body = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carrucelRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 6) % 3);
  };

  return (
    <>
      <div className="container-boddy">
        <div className='container-carrucel'>
          <h1 className='title-body'>Piscinas Populares</h1>
          <p className='paragraph-body'>Ofrecemos una variedad de servicios para satisfacer todas tus necesidades relacionadas con piscinas</p>
          <div className='carrucel' ref={carrucelRef} style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}>
            <img className='carrucel_1' src={Carrucel_1} alt='pisina_1' />
            <img className='carrucel_2' src={Carrucel_2} alt='pisina_2' />
            <img className='carrucel_3' src={Carrucel_3} alt='pisina_3' />
            <img className='carrucel_4' src={Carrucel_4} alt='pisina_4' />
            <img className='carrucel_5' src={Carrucel_5} alt='pisina_5' />
            <img className='carrucel_6' src={Carrucel_6} alt='pisina_6' />
          </div>
          <div className="button-container">
            <button onClick={prevSlide}>Anterior</button>
            <button onClick={nextSlide}>Siguiente</button>
          </div>
        </div>
        <div className='container-servicios-body'>
          <h1 className='title-body-services'>Nuestros servicios</h1>
          <div className='container-custom-design'>
            <img className='img-custom-design' src={Custom_design} alt='diseño-personalizado' />
            <div className='text-container-custom-design'>
              <h4 className='sub-title-custom-design'>Diseño Personalizado: </h4>
              <p className='paragraph-custom-design'>En AquaVisions Piscinas, nos apasiona transformar tus conceptos e ideas en diseños verdaderamente únicos y personalizados para tu espacio. Nuestro equipo de expertos en diseño trabajará estrechamente contigo para materializar tus visiones, asegurándonos de que cada detalle refleje tu estilo y cumpla con tus expectativas</p>
            </div>
          </div>
          <div className='container-Swimming-Pool-Construction'>
            <div className='text-container-Pool-Construction'>
              <h4 className='sub-title-Pool-Construction'>Construcción de Piscinas: </h4>
              <p className='paragraph-pool-construction'>Desde el inicio del proceso con la excavación hasta los toques finales que hacen brillar tu nueva piscina, nos encargamos de cada aspecto del proyecto. En AquaVisions, la construcción de piscinas no es solo un trabajo, es una creación meticulosa. Nos esforzamos por superar tus expectativas, brindándote una piscina que no solo cumple con tus necesidades prácticas, sino que también se convierte en un oasis estético en tu hogar.</p>
            </div>
            <img className='img-pool-construction' src={ Pool_Construction } alt='construccion-piscina' />
          </div>
          <div className='container-Remodeling'>
            <img className='img-remodeling' src={ Remodeling } alt='remodelacion' />
            <div className='text-container-remodeling'>
              <h4 className='sub-title-remodeling'>Remodelación: </h4>
              <p className='paragraph-remodeling'>En AquaVisions Piscinas, comprendemos que las piscinas existentes pueden necesitar una actualización para mantenerse al día con las tendencias actuales y tus preferencias cambiantes. Nuestro servicio de remodelación está diseñado para dar nueva vida a piscinas existentes, mejorando su estética y funcionalidad. Renovamos cada detalle, desde la apariencia visual hasta las características modernas, para brindarte una piscina renovada y rejuvenecida. Tu espacio acuático se transformará en un rincón contemporáneo y atractivo.</p>
            </div>
          </div>
        </div>
        <h1 className='title-testimonials'>Testimonios</h1>
        <div className='body-testimonials'>
          <div className='testimonials-card-1'>
          <img className='img-testimonial-1' src={ Testimonial_1}  alt='testimonio' />
            <h1 className='title-testimonial-1'>Testimonio de María</h1>
            <div className='container-text-testimonial-1'>
              <p>"Contratar a AquaVisions Piscinas fue la mejor decisión para mi familia. Nos encantó cómo transformaron nuestro patio en un oasis personalizado. El diseño y la construcción de la piscina superaron nuestras expectativas. ¡Gracias por hacer nuestros sueños acuáticos realidad!"</p>
            </div>
          </div>
          <div className='testimonials-card-2'>
            <img className='img-testimonial-2' src={ Testimonial_2}  alt='testimonio' />
            <h1 className='title-testimonial-2'>Testimonio de Laura</h1>
            <div className='container-text-testimonial-2'>
              <p> "La remodelación de nuestra antigua piscina por AquaVisions fue una experiencia increíble. Desde el primer contacto hasta la finalización del proyecto, el equipo fue profesional y amable. Ahora tenemos una piscina moderna y hermosa que realmente eleva nuestro espacio al aire libre.</p>
            </div>
          </div>
        </div>
        <h1 className='title-form-user'>Recibe una asesoría sin costo</h1>
        <div className='form-user'>
          <h2 className='sub-title-form-user'>Formulario de Usuario</h2>
            <form className='form'>
              <label >
                Nombre:
                <input type='text'  />
              </label>
              <label>
                Correo Electrónico:
                <input type='email'  />
              </label>
              <label>
                Numero Telefonico:
                <input type='email'  />
              </label>
              <button type='submit'>Enviar</button>
            </form>
        </div>
      </div>
    </>
  );
};
