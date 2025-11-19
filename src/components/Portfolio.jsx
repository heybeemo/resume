import React, { useState } from "react";
import ContentImg from "../assets/images/content-img.png";
import VimeoVideoImg from "../assets/images/vimeo-video-img.png";
import MidasMergeIcon from "../assets/images/icons/midasicon.png";
import WildLifeIcon from "../assets/images/icons/wildlifeicon.png";
import Popup from "./PopUp";

//Bia Port
//GardenPass
import Fluxograma from "../assets/images/fluxograma.png";
import GardenPassMain from "../assets/images/gardenpass-main.png";
import GardenPass from "../assets/images/gardenpass.png";
import GardenPassPopup from "../assets/images/gardenpass-popup.png";
import GardenPassInfo from "../assets/images/gardenpass-info.png";
import GardenPassInfo2 from "../assets/images/gardenpass-info2.png";

//Hestia
import HestiaInfo from "../assets/images/hestiainfo.png";
import HestiaInfo2 from "../assets/images/hestiainfo2.png";
import HestiaInfo3 from "../assets/images/hestiainfo3.png";
import HestiaInfo4 from "../assets/images/hestiainfo4.png";
import HestiaMain from "../assets/images/hestia-main.png";
import Hestia from "../assets/images/hestia.jpeg";

//EventGardens
import EventGarden1 from "../assets/images/eventgarden1.png";
import EventGarden2 from "../assets/images/eventgarden2.png";
import EventGarden3 from "../assets/images/eventgarden3.png";
import EventGarden4 from "../assets/images/eventgarden4.png";
import EventGarden5 from "../assets/images/eventgarden5.png";
import EventGarden6 from "../assets/images/eventgarden6.png";
import EventGarden7 from "../assets/images/eventgarden7.png";
import EventGarden8 from "../assets/images/eventgarden8.png";
import EventGarden9 from "../assets/images/eventgarden9.png";
import EventGarden10 from "../assets/images/eventgarden10.png";
import EventGarden11 from "../assets/images/eventgarden11.png";
import EventGarden12 from "../assets/images/eventgarden12.png";
import EventGarden13 from "../assets/images/eventgarden13.png";
import EventGarden14 from "../assets/images/eventgarden14.png";
import EventGarden15 from "../assets/images/eventgarden15.png";
import EventGarden16 from "../assets/images/eventgarden16.png";
import EventGardenMain from "../assets/images/eventgarden-main.png";

//Hackathon
import HackathonMain from "../assets/images/hackathon-main.png";
import HackathonVideo from "../assets/videos/hackathonVideo.mp4";

const Portfolio = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupData, setPopupData] = useState({});

  const handlePopupOpen = (e, popupContent) => {
    e.preventDefault();
    setPopupData(popupContent); // Atualiza o estado com o conteúdo do popup
    setIsPopupVisible(true);    // Torna o popup visível
  };

  const handlePopupClose = (e) => {
    e.preventDefault();
    setIsPopupVisible(false);   // Fecha o popup
  };

const popups = [
  {
    // --- GARDEN PASS POP UP INFO ---
    title: "BattlePass Feature",
    subtitle: "Midas Merge",
    iconSrc: MidasMergeIcon,
    image1: GardenPassPopup, // Imagem principal do grid

    // --- GARDEN PASS CONTENT ---
    contentBlocks: [
      { type: 'header', text: 'Garden Pass' }, // <-- Exemplo de novo título
      { type: 'paragraph', text: 
        'The Battle Pass is a dominant monetization and retention feature in the mobile industry. I successfully designed and launched Midas Merge’s Garden Pass, a segmented, tiered rewards system engineered to significantly boost player engagement and retention. '
       },
      { type: 'paragraph', text: 
        'My process involved analyzing player data and behavior within specific level brackets to define a strategic set of tasks and tiered rewards. I owned the entire feature lifecycle, from creating the initial wireframes and feature specifications to conducting the full development process and managing post-launch tuning and iteration.'
       },
      { type: 'paragraph', text: ''},
      { type: 'image', src: Fluxograma, alt: 'Primeira imagem do projeto' },
      { type: 'image', src: GardenPassInfo, alt: 'Primeira imagem do projeto' },
      { type: 'image', src: GardenPassInfo2, alt: 'Primeira imagem do projeto' },
      { type: 'image', src: GardenPassMain, alt: 'Primeira imagem do projeto' },
      { type: 'image', src: GardenPass, alt: 'Primeira imagem do projeto' },
    ]
    },
  //************************************************************************************************************************************************************************************************** */
    {
    // --- HESTIA POP UP INFO ---
    title: "LiveOps Feature",
    subtitle: "Midas Merge",
    iconSrc: MidasMergeIcon,
    image1: HestiaMain, // Imagem principal do grid

    // --- HESTIA CONTENT ---
    contentBlocks: [
      { type: 'header', text: 'Hestia’s Bingo' }, // <-- Exemplo de novo título
      { type: 'paragraph', text: 
        'Hestia’s Bingo was designed as a high-value live event focused on Hard Currency Sink and sustaining mid-to-late game chain progression. Players deliver a specific set of items in exchange for spins, driving valuable player engagement.'
       },
      { type: 'paragraph', text: 
        'I drove the entire feature design, including wireframes and detailed specifications. Crucially, I engineered the event’s economy using a custom spreadsheet to precisely manage the Item Value vs. Reward calculation. The item requirements were dynamically chosen based on recent player discoveries and garden level data, creating targeted demand and encouraging players to trade specific items within their established progression chains.'
       },
      { type: 'paragraph', text: ''},
      { type: 'image', src: HestiaInfo, alt: 'Primeira imagem do projeto' },
      { type: 'image', src: HestiaInfo2, alt: 'Primeira imagem do projeto' },
      { type: 'image', src: HestiaInfo3, alt: 'Primeira imagem do projeto' },
      { type: 'image', src: HestiaInfo4, alt: 'Primeira imagem do projeto' },
      { type: 'image', src: Hestia, alt: 'Primeira imagem do projeto' },
    ]
    },
    //************************************************************************************************************************************************************************************************** */
    {
        // --- EventGardens POP UP INFO ---
        title: "Event Gardens",
        subtitle: "Midas Merge",
        iconSrc: MidasMergeIcon,
        image1: EventGardenMain, // Imagem principal do grid

        // --- EventGaredns CONTENT ---
        contentBlocks: [
            { type: 'header', text: 'Event Gardens Implementation & Design' },
            {
                type: 'paragraph', text:
                    'Event Gardens are temporary, time-limited areas where players discover new item chains, complete tasks, and collect gifts to earn rewards that transfer directly to their main Progression Gardens.'
            },
            {
                type: 'paragraph', text:
                    'I successfully implemented this entire process across six diverse live events (seasonal and generic) using Tiled, spreadsheets, and Unity. This pipeline was designed for efficiency, requiring only a Game Designer (and an Artist, if needed) rather than relying on a developer'
            },
            { type: 'header', text: 'Key Responsibilities & Scope' },
            {
                type: 'paragraph3', text: 'My involvement spanned the full event development lifecycle:',
                bulletItems: [
                    { text: '<span class="indent-explanation"> <b>-</b> <b>Overall & Map Design:</b> Defining the initial creative direction, providing art references, and designing the full map structure, including terrain, item distribution, and progression layouts.' },
                    { text: '<span class="indent-explanation"> <b>-</b> <b>System Design & Implementation:</b> Designing complex item chain mechanics (behavior, generation, tuning, and rarity) and building all necessary Unity prefabs for the content. Optimizing chance systems, like merge loots and the slot machine economy, conducting thorough playtests, and performing final tuning to fit the event’s specific duration.' },
                    { text: '<span class="indent-explanation"> <b>-</b> <b>Content & Narrative:</b> Designing engaging quests, drafting narrative and dialogue, and executing environment design (placing and organizing art assets within Unity).' },
                    { text: '<span class="indent-explanation"> <b>-</b> <b>Tuning & Live Ops:</b> Setting up store and offers, playing and conducting thorough playtests, and performing final tuning to fit the event’s specific duration.' },
                    { text: '<span class="indent-explanation"> <b>-</b> <b>Community Feedback:</b> Managing direct contact and follow-up with the community to gather feedback and drive continuous iteration.' },
                ]
            },

            { type: 'image', src: EventGarden1, alt: 'Primeira imagem do projeto' },
            { type: 'image', src: EventGarden2, alt: 'Primeira imagem do projeto' },
            { type: 'image', src: EventGarden3, alt: 'Primeira imagem do projeto' },
            { type: 'image', src: EventGarden4, alt: 'Primeira imagem do projeto' },
            { type: 'image', src: EventGarden5, alt: 'Primeira imagem do projeto' },
            { type: 'image', src: EventGarden6, alt: 'Primeira imagem do projeto' },
            { type: 'image', src: EventGarden7, alt: 'Primeira imagem do projeto' },
            { type: 'image', src: EventGarden8, alt: 'Primeira imagem do projeto' },
            { type: 'image', src: EventGarden9, alt: 'Primeira imagem do projeto' },
            { type: 'image', src: EventGarden10, alt: 'Primeira imagem do projeto' },
            { type: 'image', src: EventGarden11, alt: 'Primeira imagem do projeto' },
            { type: 'image', src: EventGarden12, alt: 'Primeira imagem do projeto' },
            { type: 'image', src: EventGarden13, alt: 'Primeira imagem do projeto' },
            { type: 'image', src: EventGarden14, alt: 'Primeira imagem do projeto' },
            { type: 'image', src: EventGarden15, alt: 'Primeira imagem do projeto' },
            { type: 'image', src: EventGarden16, alt: 'Primeira imagem do projeto' },
        ]
    },
    //************************************************************************************************************************************************************************************************** */
    {
        // --- Hackathon POP UP INFO ---
        title: "Hackathon",
        subtitle: "WildLife",
        iconSrc: WildLifeIcon,
        image1: HackathonMain, // Imagem principal do grid

        // --- Hackathon CONTENT ---
        contentBlocks: [
            { type: 'header', text: 'Overview' },
            {
                type: 'paragraph', text:
                    'Battleship Blitz is a captivating and innovative cartoon-style strategy game designed for the casual gaming market. The game features a variety of consumables and boosts, along with strategically placed obstacles that enhance the tactical depth and replayability. Players engage in combat by selecting grid cells to attack, aiming to sink their opponent’s fleet. It is played as PvE battle, where they must sink all enemy ships within a limited number of moves. Each level presents a grid with hidden enemy ships, and players select cells to attack, aiming to reveal and destroy the ships.'
            },
            {
                type: 'local_video', // Novo tipo
                src: HackathonVideo,   // A variável importada (não é string entre aspas)
                caption: 'Battleship Blitz' // Opcional
            },
            {
                type: 'paragraph', text:
                'Utilize a variety of consumables and boosts, such as radar scans, explosive attacks, and defensive shields, to gain tactical advantages. Strategic obstacles like mines and reefs add complexity, requiring careful planning to navigate. As players progress, levels become more challenging, offering an increasingly exciting and dynamic gameplay experience similar to the progression found in Royal Match.'
            },
            { type: 'meta2', Genre: "Casual/Hybridcasual ", audience: "Casual gamers, fans of classic board games, Royal Match players and similar", platforms: "Mobile devices (iOS and Android)" },

            { type: 'header', text: 'Basic Mechanics' },
            {
                type: 'paragraph3',
                text: '<b>Game Board</b>: A grid similar to Battleship, where players have "ships" or other units displaced to attack.',
                bulletItems: [
                    { text: '<span class="indent-explanation"> <b>-</b> <b>Objective:</b> Select cells to attack and destroy all enemy units on the board.' }
                ]
            },

            // --- Game Modes ---
            { type: 'header', text: 'Game Modes' },

            // 1. PvE Mode
            {
                type: 'paragraph3',
                text: '<b>PvE mode:</b> The player has a number of moves to sink all the enemy ships.',
                bulletItems: [
                    { text: '<span class="indent-explanation"> <b>-</b> <b>Advantages:</b> Complete control over the difficulty and progression of the enemy ships, ideal for casual gamers who play for short periods.' },
                    { text: '<span class="indent-explanation"> <b>-</b> <b>Disadvantages:</b> Can become repetitive if there is not enough variety in challenges.' }
                ]
            },

            // 2. PvP Mode
            {
                type: 'paragraph3',
                text: '<b>(V1) PvP mode:</b> Each player places his own ships and have to sink all the enemy ships before their own are destroyed.',
                bulletItems: [
                    { text: '<span class="indent-explanation"> <b>-</b> <b>Advantages:</b> Direct competition can increase player engagement and retention. Offers a renewed gameplay experience with each match. Attract competitive players' },
                    { text: '<span class="indent-explanation"> <b>-</b> <b>Disadvantages:</b> Requires an efficient matchmaking system. Can be frustrating for casual players to face highly skilled opponents. Can be challenging to casual puzzle players.' }
                ]
            },

            // --- Consumables ---
            { type: 'header', text: 'Consumables' },
            {
                type: 'paragraph3',
                text: '<b>Radar:</b> Reveals the position of a line or column for one turn.',
                bulletItems: [
                    { text: '<span class="indent-explanation"> <b>-</b> Player selects the radar > they select the numbers or letters to choose the line > we have a red laser effect walking through the line, and it highlights the occupied tiles, the revealed tiles keep pulsing in red' }
                ]
            },
            {
                type: 'paragraph3',
                text: '<b>Proximity Bomb:</b> Attacks one cell and +4 adjacent cells.',
                bulletItems: [
                    { text: '<span class="indent-explanation"> <b>-</b> Player selects the bomb > they click on the cell they want to attack, we show the area that will be attacked > they have to confirm or close' }
                ]
            },
            {
                type: 'paragraph3',
                text: '<b>Titan Bomb:</b> Sinks the entire ship.',
                bulletItems: [
                    { text: '<span class="indent-explanation"> <b>-</b> Player selects the bomb > we change the representation of the bomb and the player has to confirm > we reveal the sink if they hit it' }
                ]
            },

            // --- Obstacles ---
            { type: 'header', text: 'Obstacles (V1)' },
            {
                type: 'paragraph3',
                text: '<b>Mines:</b> Cells that, when attacked, explode and damage your systems, preventing the player of using consumables for X rounds.',
                bulletItems: [
                    { text: '<span class="indent-explanation"> <b>-</b> We disable the consumables button and put a visual effect like its broken' }
                ]
            },
            {
                type: 'paragraph3',
                text: '<b>Decoy Ships:</b> Fake ships that look like real targets but do not count towards victory and waste the player\'s attacks.',
                bulletItems: [
                    { text: '<span class="indent-explanation"> <b>-</b> We show the decoy ship and a text feedback "decoy!"' }
                ]
            },
            {
                type: 'paragraph3',
                text: '<b>Fog Area:</b> Ships can\'t be revealed by radar',
                bulletItems: [
                    { text: '<span class="indent-explanation"> <b>-</b> Fog mask on a random area, the radar won\'t reveal what\'s behind, if the player hits any cell the fog will fade in that specific cell' }
                ]
            },
            {
                type: 'paragraph3',
                text: '<b>Dreadnought:</b> Ship that needs 2 attacks on each cell to be sunk.'
                // Este não tem bulletItems, então ele termina aqui.
            },
            {
                type: 'paragraph3',
                text: '<b>Deflector Shield:</b> Cells that reflect the attack to a random adjacent cell, indicated by a reflective animation or icon.',
                bulletItems: [
                    { text: '<span class="indent-explanation"> <b>-</b> “Deflected” feedback, and we show the bomb going to another random cell' }
                ]
            },
        ]
    },
          /*
    {
    // --- Dados para o GRID do portfólio ---
    title: "Crypto App UI Design",
    subtitle: "Vimeo Video",
    image1: VimeoVideoImg, // Imagem principal do grid

    // --- Dados para o POPUP (NOVO) ---
    contentBlocks: [
      { type: 'header', text: 'Crypto App UI Design' },
      { type: 'meta', createdBy: "Design Studio", date: "15/01/2023", client: "Blockchain Inc.", category: "UI/UX" },
      { type: 'paragraph', text: 'Non vel eget pharetra vestibulum orci amet feugiat mi cras.' },
      { type: 'video', url: 'https://player.vimeo.com/video/259411563' }
    ]
  }
  */
];

  return (
      <>
        {/* <!-- ====================================== Section Portfolio ===================================== --> */}
        <section className="portfolio-section" id="portfolio">
          <div className="heading-container">
            <h2 className="section-heading-text coding-skill-text fade_up">
              Portfolio.
            </h2>
            <div className="line"></div>
              </div>
              {/* --- ADICIONE ESTA PARTE AQUI --- */}
              <p className="fade_up" style={{ color: '#cccccc', marginTop: '5px', fontSize: '16px' }}>
                  Click below for more details
              </p>
          <div className="portfolios-group-main">
            {popups.map((popupContent, index) => (
                <div key={index}>
                  <div
                      className="image-container popup-btn zoom_in"
                      onClick={(e) => handlePopupOpen(e, popupContent)}
                  >
                    <img src={popupContent.image1} alt={popupContent.title} />
                    <div className="overlay">
                      <img src={popupContent.iconSrc} alt="icon" className="vimeo-icon" />
                      <p className="overlay-text">{popupContent.title}</p>
                    </div>
                  </div>
                  <p className="Corporate zoom_in">{popupContent.title}</p>
                  <p className="Corporate-sub zoom_in">{popupContent.subtitle}</p>
                </div>
            ))}
          </div>
        </section>
        <Popup
            isVisible={isPopupVisible}
            onClose={handlePopupClose}
            {...popupData} // Passa os dados do popup de forma dinâmica
        />
        {/* <!-- ====================================== Section Portfolio End ===================================== --> */}
      </>
  );
};


export default Portfolio;