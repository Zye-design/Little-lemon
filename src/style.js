const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  innerWidth: "w-full",

  heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "font-poppins font-normal text-bulaBa text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center gap-y-8 flex-wrap",
  flexStart: "flex justify-start items-center",
  flexEnd: "flex justify-end items-center",

  heroWrapper: "text-white relative",
  heroContainer: "md:justify-between justify-around items-end",

  searchBar: "rounded-md justify-between bg-white w-full",
  inputbox1: "outline-none border-0",

  heroLeft: "gap-12 w-[45%]",
  heroTitle: "relative z-10",
  purpleCircle: "sm:absolute relative rounded-full  sm:h-16 h-0 sm:w-16 w-0 sm:bg-violet-600 bg-transparent sm:z-[-10] z-0 sm:top-[-10%] top-0 sm:right-[44%] right-0",

  flexColEnd: "flex flex-col items-end justify-center",
  flexColStart: "flex flex-col sm:items-start items-center justify-center",
  flexColCenter: "flex flex-col items-center justify-center",

  primaryText: "text-primary1 font-bold text-4xl",
  secondaryText: "text-Highlight1 text-xl",
  orangeText: "text-primary2 font-semibold text-2xl",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-6",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
