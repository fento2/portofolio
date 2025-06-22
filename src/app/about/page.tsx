import Icon from "@/components/Icon";
import { warna1 } from "../page";
function AboutPage() {
    return (
        <div className="text-white">
            <div className="space-y-12 grid lg:grid-cols-2 gap-3">
                <div className="flex flex-col items-center text-center space-y-12">
                    <h1 className={`text-4xl font-bold ${warna1}`}>About Me</h1>
                    <p className="text-[15px] sm:text-2xl mx-20 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo culpa eum, atque provident numquam aperiam dignissimos magni pariatur recusandae modi, tenetur dicta voluptas necessitatibus minima quo! Exercitationem excepturi amet eveniet!</p>
                </div>
                <div>
                    <div className="space-y-12">
                        <div className="flex justify-center items-center text-center">
                            <h2 className={`text-4xl font-bold ${warna1}`}>Tech Stack</h2>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 ">
                                <div><Icon icon="/icons8-html.svg" name="HTML" ClassName="hover:shadow-[#e44d26]" /></div>
                                <div><Icon icon="/icons8-css.svg" name="CSS" ClassName="hover:shadow-[#264de4]" /></div>
                                <div><Icon icon="/icons8-js.svg" name="JavaScript" ClassName="hover:shadow-yellow-400" /></div>
                                <div><Icon icon="/icons8-typescript.svg" name="TypeScript" ClassName="hover:shadow-blue-400" /></div>
                                <div><Icon icon="/icons8-react.svg" name="React" ClassName="hover:shadow-cyan-400" /></div>
                                <div><Icon icon="/icons8-tailwind-css.svg" name="Tailwind CSS" ClassName="hover:shadow-sky-400" /></div>
                                <div><Icon icon="/nextdotjs.svg" name="Next.Js" ClassName="hover:shadow-white" /></div>
                                <div><Icon icon="/vscode.svg" name="VS Code" ClassName="hover:shadow-[#1E90FF]" /></div>
                                <div><Icon icon="/github-logo.png" name="GitHub" ClassName="hover:shadow-white" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default AboutPage;