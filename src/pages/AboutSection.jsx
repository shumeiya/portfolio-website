export default function StatementSection() {
  return (
    <section
      className="bg-[#FF6B35] text-white h-[30vh] sm:h-screen 
    flex justify-center items-center
    px-[2vw] py-[1vw] "
    >
      <div className="px-[2vw] ">
        {/* Row 1 */}
        <div className="flex justify-center items-center gap-x-4 flex-wrap text-center">
          <p className="text-[4vw] font-extrabold">I dream, I design,</p>
          <img
            src="/src/assets/AboutSection/AnimalCrossing.png"
            alt="Animal Crossing"
            className="w-[9vw]"
          />
          <p className="text-[4vw] font-extrabold">I create!</p>
        </div>

        {/* Row 2 */}
        <div className="flex justify-center items-center gap-x-4 flex-wrap text-center">
          <p className="text-[4vw] font-extrabold">With play</p>
          <img
            src="/src/assets/AboutSection/Switch.gif"
            alt="switch"
            className="w-[9vw]"
          />
          <p className="text-[4vw] font-extrabold">and flair,</p>
          <img
            src="/src/assets/AboutSection/Me.gif"
            alt="Girl"
            className="w-[9vw]"
          />
        </div>

        {/* Row 3 */}
        <div className="flex justify-center items-center gap-x-4 flex-wrap text-center">
          <p className="text-[4vw] font-extrabold">I shape ideas into</p>
          <img
            src="/src/assets/AboutSection/Swimming.gif"
            alt="Swimming"
            className="w-[9vw]"
          />
          <p className="text-[4vw] font-extrabold">design.</p>
        </div>

        {/* Row 4 */}
        <div className="flex justify-between items-end  px-4">
          <img
            src="/src/assets/AboutSection/AnimalCrossing.gif"
            alt="Animal Crossing"
            className="w-[9vw]"
          />
          <p className="text-right font-light text-[3vw] w-full text-white">
            I am Shumi~Ya !
          </p>
        </div>
      </div>
    </section>
  );
}
