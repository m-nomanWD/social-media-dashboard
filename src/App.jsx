import React from "react"
import { useState } from "react"
import { CardContainer, OverviewContainer } from './components'
function App() {
  const [darkMode, isDarkMode] = useState(false)

  return (
    <>
      <main className={darkMode ? " text-white dark ease-linear min-h-svh dark:bg-neutral_dark_very_dark_blue_bg" : " text-neutral_light_very_dark_blue_text ease-linear duration-100"}>
        <header className="bg-neutral_light_very_pale_blue_top_bg_pattern  dark:bg-neutral_dark_very_dark_blue_top_bg_pattern">
          <div className="flex flex-col sm:flex-row sm:justify-between items-baseline pt-8 sm:py-12 h-64 max-w-5xl mx-auto px-8">
            <div className="pb-4 sm:w-fit w-full border-b-[1px] sm:border-none border-b-text-neutral_light_dark_grayish_blue_text dark:border-neutral_dark_desaturated_blue_card_bg">
              <h1 className="md:text-4xl text-2xl  text-wrap font-bold ">Social Media Dashboard</h1>
              <h4 className="text-neutral_light_dark_grayish_blue_text font-semibold m-0 dark:text-neutral_dark_desaturated_blue_text ">Total Followers: 23,004</h4>
            </div>
            <div className="flex items-center justify-center mt-4">
              <span className="sm:mr-4 mr-2 dark:text-neutral_dark_desaturated_blue_text text-neutral_light_dark_grayish_blue_text font-semibold">Dark Mode</span>
              <div className="relative rounded-xl  bg-light_theme_toggle w-11 h-5 dark:bg-dark_theme_toggle">
                <span onClick={() => {
                  isDarkMode(!darkMode)
                }} className="absolute ease-linear duration-300 top-[2px] left-[3px] h-4 cursor-pointer  w-4 rounded-full bg-neutral_light_white_bg dark:darkModeToggle">
                </span>
              </div>
            </div>
          </div>
        </header>
        <section className="max-w-5xl mx-auto    flex flex-col  px-8" >

          <CardContainer />
          <OverviewContainer />
        </section>

        {/* <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Your Name Here</a>.
        </div> */}

      </main>
      {/* 
      

    



      Overview - Today

      Page Views
      87
      3%

      Likes
      52
      2%

      Likes
      5462
      2257%

      Profile Views
      52k
      1375%

      Retweets
      117
      303%

      Likes
      507
      553%

      Likes
      107
      19%

      Total Views
      1407
      12% */}


    </>
  )


}

export default App
