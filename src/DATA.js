import icon_projects_active from "./images/icon_projects_active.png";
import icon_projects_inactive from "./images/icon_projects_inactive.png";
import icon_about_active from "./images/icon_about_active.png";
import icon_about_inactive from "./images/icon_about_inactive.png";
import avatar from "./images/avatar.png";

// Project mini images:
import tetrisMini from "./images/tetrisMini.png";
import cfMini from "./images/cfMini.png";
import clouderChatMini from "./images/clouderChatMini.png";
import drawingShapesMini from "./images/drawingShapesMini.png";
import randomCalculatorMini from "./images/randomCalculatorMini.png";
import onlearnMini from "./images/onlearnMini.png";
import pathFinderMini from "./images/pathFinderMini.png";
import mazeSolverMini from "./images/mazeSolverMini.png";
import hangmanMini from "./images/hangmanMini.png";
import millionaireMini from "./images/millionaireMini.png";
import cmMini from "./images/cmMini.png";
import campingShopMini from "./images/campingShopMini.png";
import gameListMini from "./images/gameListMini.png";
import d2Mini from "./images/2dMini.png";

// Project big images:
import tetrisBig from "./images/tetrisMini.png";
import cfBig from "./images/cfBig.png";
import clouderChatBig from "./images/clouderChatBig.png";
import drawingShapesBig from "./images/drawingShapesBig.png";
import randomCalculatorBig from "./images/randomCalculatorBig.png";
import onlearnBig from "./images/onlearnBig.png";
import pathFinderBig from "./images/pathFinderBig.png";
import mazeSolverBig from "./images/mazeSolverBig.png";
import hangmanBig from "./images/hangmanBig.png";
import millionaireBig from "./images/millionaireBig.png";
import cmBig from "./images/cmBig.png";
import campingShopBig from "./images/campingShopBig.png";
import gameListBig from "./images/gameListBig.png";
import d2Big from "./images/2dBig.png";

// Tech icons
import icon_java from "./images/icon_java.png";
import icon_android from "./images/icon_android.png";
import icon_c_sharp from "./images/icon_c_sharp.png";
import icon_dotnet from "./images/icon_dotnet.png";
import icon_c from "./images/icon_c.png";
import icon_reactjs from "./images/icon_reactjs.png";
import icon_spring from "./images/icon_spring.png";
import icon_firebase from "./images/icon_firebase.png";
import icon_sql from "./images/icon_sql.png";
import icon_sqlite from "./images/icon_sqlite.png";
import icon_js from "./images/icon_js.png";

// -------------------- Gallery --------------------
//// Community Forum
import g_cf_1 from "./images/gallery/g_cf_1.png";
import g_cf_2 from "./images/gallery/g_cf_2.png";
import g_cf_3 from "./images/gallery/g_cf_3.png";
import g_cf_4 from "./images/gallery/g_cf_4.png";
import g_cf_5 from "./images/gallery/g_cf_5.png";
import g_cf_6 from "./images/gallery/g_cf_6.png";
import g_cf_7 from "./images/gallery/g_cf_7.png";
import g_cf_8 from "./images/gallery/g_cf_8.png";
//// Random Calculator
import RandomCalculator01 from "./images/gallery/RandomCalculator01.png";
import RandomCalculator02 from "./images/gallery/RandomCalculator02.png";
import RandomCalculator03 from "./images/gallery/RandomCalculator03.png";
import RandomCalculator04 from "./images/gallery/RandomCalculator04.png";
import RandomCalculator05 from "./images/gallery/RandomCalculator05.png";
import RandomCalculator06 from "./images/gallery/RandomCalculator06.png";
import RandomCalculator07 from "./images/gallery/RandomCalculator07.png";
import RandomCalculator08 from "./images/gallery/RandomCalculator08.png";
import RandomCalculator09 from "./images/gallery/RandomCalculator09.png";
import RandomCalculator10 from "./images/gallery/RandomCalculator10.png";
import RandomCalculator11 from "./images/gallery/RandomCalculator11.png";
//// Onlearn
import onlearn1 from "./images/gallery/onlearn1.gif";
import onlearn2 from "./images/gallery/onlearn2.gif";
//// Path Finder
import pathFinder1 from "./images/gallery/pathFinder1.png";
//// Courses Manager
import cm1 from "./images/gallery/cm1.gif";
import cm2 from "./images/gallery/cm2.gif";
import cm3 from "./images/gallery/cm3.gif";
import cm4 from "./images/gallery/cm4.gif";
import cm5 from "./images/gallery/cm5.gif";
//// Camping Shop
import CampingShop01 from "./images/gallery/CampingShop01.png";
import CampingShop02 from "./images/gallery/CampingShop02.png";
import CampingShop03 from "./images/gallery/CampingShop03.png";
import CampingShop04 from "./images/gallery/CampingShop04.png";
//// Game List
import GameList01 from "./images/gallery/GameList01.png";
import GameList02 from "./images/gallery/GameList02.png";
import GameList03 from "./images/gallery/GameList03.png";
import GameList04 from "./images/gallery/GameList04.png";

const DATA = {

    menu: [
        {
            name: "My Projects",
            icon_active: icon_projects_active,
            icon_inactive: icon_projects_inactive
        },
        {
            name: "About me",
            icon_active: icon_about_active,
            icon_inactive: icon_about_inactive
        }
    ],

    tech: {
        'Java': icon_java,
        'Android': icon_android,
        'C#': icon_c_sharp,
        ".NET": icon_dotnet,
        'C': icon_c,
        'ReactJS': icon_reactjs,
        'Spring': icon_spring,
        'Firebase': icon_firebase,
        'SQL': icon_sql,
        'SQLite': icon_sqlite,
        'JS': icon_js
    },

    projects: [
        {
            title: "Tetris",
            image: tetrisMini,
            bigImage: tetrisBig,
            techs: [ 'ReactJS' ],
            state: "Completed",
            type: "self-assignment",
            source: "https://github.com/angelzbg/tetris",
            info: "Custom tetris game",
            url: "https://angelzbg.github.io/tetris/"
        },
        {
            title: "Community Forum",
            image: cfMini,
            bigImage: cfBig,
            techs: [ 'Android', 'Java', 'ReactJS', 'Firebase' ],
            state: "In Progress - Android app, Pending - ReactJS app",
            type: "self-assignment",
            source: "https://github.com/angelzbg/Community-Forum",
            info: "An application where users can create and post in communities, comment, read and vote in real time, save posts and communities, " +
            "add friends and chat in realtime.<br/>Administrators/community owners can restrict content and ban users globally/in community.</br>" +
            "Owners can pin posts and change descriptions and avatars of their own communities.<br/>" +
            "Users also can change their avatars and block other users.",
            gallery: [ g_cf_1, g_cf_2, g_cf_3, g_cf_4, g_cf_5, g_cf_6, g_cf_7, g_cf_8 ],
        },
        {
            title: "Clouder Chat",
            image: clouderChatMini,
            bigImage: clouderChatBig,
            techs: [ 'Android', 'Java', 'Firebase', 'SQLite' ],
            state: "Completed",
            type: "self-assignment",
            source: "https://github.com/angelzbg/ClouderChat",
            info: "A simple chat application made for Android devices.<br/>Users can create profiles, edit their avatar, add/remove/blocks other users, chat in realtime and send images.",
            video: "https://www.youtube.com/embed/vGCNsD_eeSA"
        },
        {
            title: "Drawing Shapes",
            image: drawingShapesMini,
            bigImage: drawingShapesBig,
            techs: [ 'Android', 'Java' ],
            state: "Completed",
            type: "university assignment (3rd year, 2nd trimester [PU]) - course Computer graphics",
            source: "https://github.com/angelzbg/DrawingShapes",
            info:
            "Ech student have to create a graphic editor with primitives and vector type. Every OOP planguage is allowed.<br/>"+
            "The UI for graphic (2D) modelling have to implement the following capabillities:</br>"+
            "&emsp;1. Bulding images from different primitives (vector) - points, segment, polygons, eclipses etc. <b>(3pts)</b><br/>"+
            "&emsp;2. Visualizing of primitives on the base of their characteristics - color, width, opacity etc. <b>(3pts)</b><br/>"+
            "&emsp;3. Indication of a premitive from the image. <b>(4pts)</b><br/>"+
            "&emsp;4. Moving, rotating, scaling etc. of primitives. <b>(3pts)</b><br/>"+
            "&emsp;5. Hierarchical grouping. <b>(5pts)</b><br/>"+
            "&emsp;6. Moving, rotating, scaling etc. of groups. <b>(5pts)</b><br/>"+
            "&emsp;7. Different ways of determingof characteristics - color by name, naming objects etc. <b>(2.5pts)</b><br/>"+
            "&emsp;8. Different ways of operating by the user - with menu, buttons, mouse etc. <b>(2.5pts)</b><br/>"+
            "&emsp;9. Adding, removing, cloning, actualization of elements, grouping, regrouping etc. <b>(2.5pts)</b><br/>"+
            "&emsp;10. Different ways of selecting of elements. <b>(2.5pts)</b><br/>"+
            "&emsp;11. Multi windows. <b>(bonus 5pts)</b><br/>"+
            "&emsp;12. Different ways of reading/saving to an external memory. <b>(10pts)</b><br/>",
            video: "https://www.youtube.com/embed/ddvuFrqrC8M"
        },
        {
            title: "Random Calculator",
            image: randomCalculatorMini,
            bigImage: randomCalculatorBig,
            techs: [ 'Android', 'Java' ],
            state: "Completed",
            type: "university assignment (2nd year, 3rd trimester [PU]) - course Block programming",
            source: "https://github.com/angelzbg/RandomCalculator",
            gallery: [ RandomCalculator01, RandomCalculator02, RandomCalculator03, RandomCalculator04, RandomCalculator05, RandomCalculator06, RandomCalculator07, RandomCalculator08, RandomCalculator09, RandomCalculator10, RandomCalculator11 ]
        },
        {
            title: "Onlearn",
            image: onlearnMini,
            bigImage: onlearnBig,
            techs: [ 'Android', 'Java', 'Firebase' ],
            state: "Completed",
            type: "university assignment (3rd year, 2nd trimester [PU]) - course Specialty practice",
            source: "https://github.com/angelzbg/Onlearn",
            gallery: [ onlearn1, onlearn2 ]
        },
        {
            title: "Path Finder",
            image: pathFinderMini,
            bigImage: pathFinderBig,
            techs: [ 'Java' ],
            state: "Completed",
            type: "university assignment (3rd year, 3rd trimester [PU]) - course AI",
            source: "https://github.com/angelzbg/PseudoGraphJava",
            gallery: [ pathFinder1 ]
        },
        {
            title: "Simple Maze Solver",
            image: mazeSolverMini,
            bigImage: mazeSolverBig,
            techs: [ 'C#' ],
            state: "Completed",
            type: "university assignment (3rd year, 1st trimester [PU]) - course Algorithms and data structures",
            source: "https://github.com/angelzbg/Maze",
            video: "https://www.youtube.com/embed/qVAHV0XYhf0"
        },
        {
            title: "Hangman",
            image: hangmanMini,
            bigImage: hangmanBig,
            techs: [ 'Spring', 'ReactJS' ],
            state: "Completed",
            type: "university assignment (3rd year, 3rd trimester [PU]) - course Web introduction with Java and JS",
            source: "https://github.com/angelzbg/Hangman",
            video: "https://www.youtube.com/embed/ShlRlK0_cUk"
        },
        {
            title: "Who Wants to Be a Millionaire?",
            image: millionaireMini,
            bigImage: millionaireBig,
            techs: [ 'ReactJS' ],
            state: "Completed",
            type: "self-assignment",
            source: "https://github.com/angelzbg/Who-Wants-to-Be-a-Millionaire/tree/master/whowantstobeamillionaire",
            video: "https://www.youtube.com/embed/DaBYg24mg94"
        },
        {
            title: "Courses Manager",
            image: cmMini,
            bigImage: cmBig,
            techs: [ 'Java', 'SQL' ],
            state: "Completed",
            type: "university assignment (2nd year, 2nd trimester [PU]) - course Practice OOP & DB",
            source: "https://github.com/angelzbg/CoursesManager",
            gallery: [ cm1, cm2, cm3, cm4, cm5 ]
        },
        {
            title: "Camping Shop",
            image: campingShopMini,
            bigImage: campingShopBig,
            techs: [ 'Java' ],
            state: "Completed",
            type: "university assignment (2nd year, 2nd trimester [PU]) - course OOP",
            source: "https://github.com/angelzbg/CampingShop",
            gallery: [ CampingShop01, CampingShop02, CampingShop03, CampingShop04 ]
        },
        {
            title: "Game List",
            image: gameListMini,
            bigImage: gameListBig,
            techs: [ '.NET' ],
            state: "Completed",
            type: "university assignment (3rd year, 1st trimester [PU]) - course Distributed applications",
            source: "https://github.com/angelzbg/GameList",
            gallery: [ GameList01, GameList02, GameList03, GameList04 ]
        },
        {
            title: "2D Arrays Exercises",
            image: d2Mini,
            bigImage: d2Big,
            techs: [ 'C' ],
            state: "Completed",
            type: "university assignments (1st year, 1st semester [TU Sofia]) - course PUC",
            source: "https://github.com/angelzbg/PIK2"
        }
    ],

    about: {
        name: "Angel Zlatanov",
        date: 1996,
        region: "Plovdiv",
        home: "Ustina",
        phone: "0888861815",
        avatar: avatar,
        email: "angel.zlatanovv@gmail.com"
    }

} // DATA{}

export default DATA;