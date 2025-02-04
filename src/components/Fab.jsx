const Fab = () => {
  const googleDriveUrl =
    "https://drive.google.com/file/d/1h5ET0UCymC-5GxMY7zz7h7vy8-zAEY0S/view?usp=sharing";

  return (
    <div className="fixed bottom-8 right-16">
      <button
        className=" w-12 h-12  bg-violet-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110 animate-bounce"
        onClick={() => window.open(googleDriveUrl, "_blank")}
      >
        &#8681;
      </button>
    </div>
  );
};

export default Fab;
