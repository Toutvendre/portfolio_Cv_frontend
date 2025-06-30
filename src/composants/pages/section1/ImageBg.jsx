import '@/styles/StyleContenu.css';

const ImageBg = () => {
    return (
        <div className="absolute inset-0 select-none z-1 flex items-center justify-start h-screen overflow-hidden">
            <img
                src="/images/duc3.png"
                alt="Image de fond"
                className="max-h-full w-[1500px] ml-[-180px] opacity-70 background-image"
            />
        </div>
    );
};

export default ImageBg;