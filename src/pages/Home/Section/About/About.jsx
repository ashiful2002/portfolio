import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="mx-auto my-12 max-w-7xl scroll-mt-16 p-6">
      <h2 className="heading">About Me</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* 1. Image */}
        <div className="my-4 flex flex-col items-center justify-center rounded p-4 shadow-md duration-300 hover:shadow-xl">
          <img
            src="https://i.ibb.co/j9sVq3P9/dream-h-p.jpg"
            alt="Ashiful Islam"
            className="absolute h-[300px] w-[300px] rounded-full object-cover"
          />
          <p className="badge relative ml-[110px] mt-[290px] bg-secondary-color font-thin">
            Developer
          </p>
        </div>
        {/* 2. Text */}
        <div className="rounded p-4 shadow-md duration-300 hover:shadow-xl">
          <p className="mb-4 text-justify leading-relaxed">
            1. Hi, I'm <strong>Ashiful Islam</strong> — a passionate web
            developer with a love for crafting clean, efficient, and
            user-friendly digital experiences. My programming journey began
            several years ago when I first discovered the magic of turning ideas
            into reality through code. Since then, I’ve dedicated myself to
            mastering web technologies, continuously learning and experimenting
            to grow as a developer.
          </p>
          <p className="mb-4 text-justify leading-relaxed">
            2. I truly enjoy building{" "}
            <em>dynamic websites and web applications</em> that not only look
            great but also solve real-world problems. Whether it’s designing a
            smooth user interface or optimizing backend logic, I thrive in
            creating seamless experiences that delight users. Working on
            projects that challenge me to learn new skills or think creatively
            is where I find the most joy.
          </p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* 3. Another text */}
        <div className="rounded p-4 shadow-md duration-300 hover:shadow-xl">
          <p className="mb-4 text-justify leading-relaxed">
            3. Outside of programming, I’m a firm believer in a balanced life. I
            enjoy <strong>playing sports</strong>, especially football and
            badminton, which help me stay active and sharp. I’m also passionate
            about <strong>painting and digital art</strong> — expressing myself
            through colors and creativity gives me a fresh perspective that
            often fuels my problem-solving skills in coding. When I’m not coding
            or creating art, I love spending time with friends, exploring new
            places, and discovering interesting books and podcasts.
          </p>
          {/* Show only on small screens */}
          <p className="text-justify leading-relaxed md:hidden">
            4. In short, I’m a curious, dedicated, and creative person who loves
            blending technology and art to make meaningful things. I believe the
            best work comes when you bring your whole self into it — and that’s
            exactly what I strive to do every day.
          </p>
        </div>
        {/* Show only on md and above */}
        <div className="hidden rounded p-4 shadow-md duration-300 hover:shadow-xl md:block">
          <p className="text-justify leading-relaxed">
            4. In short, I’m a curious, dedicated, and creative person who loves
            blending technology and art to make meaningful things. I believe the
            best work comes when you bring your whole self into it — and that’s
            exactly what I strive to do every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
