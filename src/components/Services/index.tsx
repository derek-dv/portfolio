import { Code, Layout, Server, Database, Globe, Smartphone } from "lucide-react";

const services = [
    {
        icon: Code,
        title: "Fullstack Development",
        description: "Building robust, scalable applications using NextJS, React, and NodeJS. Ensuring seamless integration between frontend and backend.",
        color: "bg-orange-100 text-orange-600",
    },
    {
        icon: Layout,
        title: "Frontend Engineering",
        description: "Crafting responsive, high-performance user interfaces with React, TailwindCSS, and modern animation libraries.",
        color: "bg-purple-100 text-purple-600",
    },
    {
        icon: Server,
        title: "Backend Systems",
        description: "Designing efficient APIs, database architectures, and server-side logic using NodeJS and Express.",
        color: "bg-blue-100 text-blue-600",
    },
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Services Cards */}
                    <div className="space-y-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group bg-white p-6 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 flex items-start gap-6 cursor-pointer hover:-translate-y-1 border border-slate-100"
                            >
                                <div className={`p-4 rounded-2xl ${service.color} group-hover:scale-110 transition-transform`}>
                                    <service.icon size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Content */}
                    <div className="lg:pl-10">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">
                            My Awesome <br />
                            <span className="text-primary">Services</span>
                        </h2>
                        <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                            I help startups and businesses build modern web applications. From clean frontends to powerful backends.
                            <br /><br />
                            Whether you need a high-converting landing page or a complex SaaS platform, I deliver clean, maintainable code using the latest tech stack: <span className="font-bold text-slate-700">NextJS, React, and NodeJS</span>.
                        </p>
                        <a
                            href="#contact"
                            className="bg-primary text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-colors"
                        >
                            Hire Me
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
