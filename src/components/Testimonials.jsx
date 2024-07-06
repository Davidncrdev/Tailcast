import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const testimonialsData = [
  {
    customerName: "Ana García",
    customerTitle: "CEO de TechCorp",
    content:
      "Las herramientas analíticas han transformado nuestra manera de trabajar. Tailcast ha permitido tomar decisiones basadas en datos que han mejorado significativamente nuestra eficiencia. La plataforma es intuitiva y los conocimientos obtenidos han sido reveladores.",
    image: testimonial1,
  },
  {
    customerName: "Luis Pérez",
    customerTitle: "Director de Innovación en DataSolutions",
    content:
      "Desde que implementamos Tailcast, hemos visto una mejora notable en nuestros procesos. Las visualizaciones de datos en tiempo real y las predicciones avanzadas nos han proporcionado una ventaja competitiva significativa.",
    image: testimonial2,
  },
  {
    customerName: "María López",
    customerTitle: "Gerente de Proyectos en InnoTech",
    content:
      "Tailcast ha sido una herramienta esencial para nuestro equipo. La capacidad de colaborar en un entorno basado en datos ha permitido que nuestros proyectos se desarrollen de manera más eficiente y efectiva. No podríamos estar más satisfechos.",
    image: testimonial3,
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-16 mb-16 lg:mb-32 bg-bgDark2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="block-subtitle text-center mb-6">Testimonios</div>
        <div className="block-big-title text-center mb-20 px-15 sm:px-24 md:px-48">
          
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 main-border-gray-darker rounded-xl bg-bgDark3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="content-text-white">"{testimonial.content}"</div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <div>
                  <img
                    src={testimonial.image.src}
                    alt="Customer avatar"
                    width="45px"
                    height="5px"
                    aria-label={testimonial.customerName}
                  />
                </div>
                <div className="flex flex-col ml-4">
                  <div className="content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
