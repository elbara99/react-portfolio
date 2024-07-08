import { RiReactjsLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { SiPhpmyadmin } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaPython, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});

const Technologie = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <motion.div
            whileInView={{ opacity: 1,x:0}}
            initial={{ opacity: 0, x: -100}}
            transition={{duration: 1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <FaJava className="text-7xl text-red-700" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                    <SiPhpmyadmin className="text-7xl text-yellow-700" />
                </motion.div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaDatabase className="text-7xl text-lime-800" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandJavascript className="text-7xl text-yellow-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-cyan-900" />
                </div>
            </motion.div>
        </div>
    );
};

export default Technologie;
