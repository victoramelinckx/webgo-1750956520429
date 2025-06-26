
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Transforma tu negocio con nuestra web rápida y soporte 24/7, para que nunca pierdas una venta." cta1="Comienza Hoy" />
<How step1Title="Descubre WebGo" step1Desc="Digitaliza tu negocio en Santiago fácilmente." step2Title="Web en 24 horas" step2Desc="Recibe tu sitio de ventas rápido." step3Title="Soporte 24/7" step3Desc="Estamos siempre disponibles para ayudarte." />
<Aboutus headline="WebGo: Digitaliza y Crece Rápido" subheadline="Transformamos tu negocio en línea sin complicaciones. No más ventas solo por recomendación." beneficiotitulo1="Fácil Digitalización" beneficio1="Implementación rápida sin complicaciones." beneficiotitulo2="Aumento de Ventas" beneficio2="Estrategias probadas que impulsan resultados." />
<Services heading="Impulsa Tus Ventas Digitales" description="Hola (Precio: 222) transforma recomendaciones en ventas online rápidamente." services={[{"name":"Creación de Sitios Web","icon":"globe","description":"Webs que transforman visitantes en clientes."},{"name":"Optimización SEO","icon":"search","description":"Atrae más clientes con SEO efectivo."},{"name":"Gestión de Redes Sociales","icon":"share","description":"Amplía tu alcance en redes sociales."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"Integración de Pagos","icon":"credit-card","description":"Facilita transacciones seguras y rápidas."},{"name":"Análisis de Tráfico Web","icon":"chart-bar","description":"Conoce y mejora el comportamiento de visitantes."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en sitios web impresionantes que destacan en calidad." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mi negocio si solo vendo por recomendación?","respuesta":"WebGo transforma tus recomendaciones en ventas online. Configuramos tu sitio web y te ayudamos a atraer clientes con estrategias digitales efectivas, para que puedas vender más sin depender solo del boca a boca."},{"pregunta":"¿Qué beneficios obtengo al usar el servicio 'Hola' de WebGo?","respuesta":"El servicio 'Hola' de WebGo te ofrece una solución completa para lanzar tu tienda online por solo 222. Esto incluye diseño web, optimización para SEO y soporte continuo, asegurando que tu negocio destaque en el mundo digital."},{"pregunta":"¿Qué pasa si no tengo tiempo para gestionar un sitio web?","respuesta":"No te preocupes, WebGo se encarga de todo por ti. Desde la creación hasta la gestión diaria de tu sitio web, liberamos tu tiempo para que puedas concentrarte en hacer crecer tu negocio."},{"pregunta":"¿Qué desafíos resuelve WebGo para mi negocio?","respuesta":"WebGo resuelve el desafío de generar ventas online y manejar un sitio web. Con nuestra experiencia, te ayudamos a alcanzar nuevos clientes en Santiago, haciendo que tu negocio sea visible y accesible en Internet."},{"pregunta":"¿Cómo puede WebGo ayudarme a generar ventas online?","respuesta":"WebGo utiliza estrategias de marketing digital personalizadas para aumentar el tráfico a tu sitio web, convirtiendo visitantes en clientes. Esto significa más ventas online y crecimiento para tu pequeño negocio."}]} />
<BookAppointment 
                      heading="Digitaliza Tu Negocio en Santiago" 
                      description="Hola, aumenta tus ventas con WebGo: llevamos tus ventas al mundo digital por solo 222. Deja de depender solo de recomendaciones, contáctanos hoy."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
