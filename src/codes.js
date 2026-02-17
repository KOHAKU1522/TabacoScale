export const CODES = [
    {
        title: "App.jsx",
        sentence: `
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ROUTES } from './const.js';

import HomePage from './pages/HomePage.jsx';
import DiagnosisPage from './pages/DiagnosisPage.jsx';
import ResultPage from './pages/ResultPage.jsx';
import SourcePage from './pages/SourcePage.jsx';
import OthersPage from './pages/OthersPage.jsx';

import './App.css';
import "./App.module.css";;

import Button from './components/Button/Button';
import buttonStyles from "./components/Button/Button.module.css";

import Input from './components/Input/Input';
import inputStyles from "./components/Input/Input.module.css";

import Background from './components/Background/Background';
import Header from './components/Header/Header.jsx';

function App() {
  const handleClick = () => {
    alert("");
  };

  return (
    <>
      <Background />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.DIAGNOSIS} element={<DiagnosisPage />} />
          <Route path={ROUTES.RESULT} element={<ResultPage />} />
          <Route path={ROUTES.SOURCE} element={<SourcePage />} />
          <Route path={ROUTES.OTHERS} element={<OthersPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
        `,
    },
    {
        title: "App.css",
        sentence: `
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
        `,
    },
    {
        title: "const.js",
        sentence: `
export const ROUTES = {
    HOME: "/",
    DIAGNOSIS: "/diagnosis",
    RESULT: "/result",
    SOURCE: "/source",
    OTHERS: "/others",
};

export const DEFAULT = {
    PRICE_PER_PACK: 600, // 円
    CIGARETTES_PER_PACK: 20,
    LENGTH_PER_CIGARETTE: 84, // mm (キングサイズ)
    MINUTES_PER_CIGARETTE: 3.5, // minutes
};

export const QUESTIONS = [
    {
        question: "※必須 1日にどれくらいタバコを吸いますか？",
        type: "number",
        placeholder: 0,
        unit: "本",
        required: true,
    },
    {
        question: "※必須 喫煙歴を教えてください。",
        type: "number",
        placeholder: 0,
        unit: "ヵ月",
        required: true,
    },
    {
        question: "1箱の値段",
        type: "number",
        placeholder: \`（平均）\${DEFAULT.PRICE_PER_PACK}\`,
        unit: "円",
        required: false,
    },
    {
        question: "1本の長さ",
        type: "number",
        placeholder: \`（平均）\${DEFAULT.LENGTH_PER_CIGARETTE}\`,
        unit: "mm",
        required: false,
    },
];

export const COMMENT = [
    "長い間ずっと付き合ってますね…あなたのタバコ歴、かなりのベテランです。",
    "毎日の本数がすごい… あなたはまさにヘビースモーカー！",
    "これは… 長期×大量で、あなたは紛れもないヘビースモーカーですね！",
];

export const MONEY_EXAMPLE = [
    {
        name: "国産黒毛和牛",
        price: 25,
        unit: "g",
        src: "/images/food_niku_gyuniku_steak.png",
    },
    {
        name: "ハーゲンダッツ",
        price: 350,
        unit: "個",
        src: "/images/sweets_cup_ice_cream.png",
    },
    {
        name: "スタバの新作フラペチーノ",
        price: 700,
        unit: "杯",
        src: "/images/drink_coffee_cream_pink.png",
    },
    {
        name: "外食",
        price: 1500,
        unit: "回",
        src: "/images/food_zei4_gaisyoku.png",
    },
    {
        name: "映画のチケット(ポップコーン付)",
        price: 2800,
        unit: "回",
        src: "/images/movie_man.png",
    },
    {
        name: "焼肉食べ放題",
        price: 3718,
        unit: "回",
        src: "/images/food_niku_yakiniku_set.png",
    },
    {
        name: "ディズニーランドのワンデーパス",
        price: 9400,
        unit: "枚",
        src: "/images/yuenchi.png",
    },
    {
        name: "高級スパ・サウナ回数券",
        price: 15000,
        unit: "枚",
        src: "/images/ofuro_sauna_man.png",
    },
    {
        name: "純金",
        price: 28300,
        unit: "g",
        src: "/images/gold_kinkai_nobebou_notext.png",
    },
    {
        name: "スマートリング",
        price: 49800,
        unit: "個",
        src: "/images/wa_white.png",
    },
    {
        name: "Nintendo Switch 2",
        price: 49980,
        unit: "台",
        src: "/images/portable_game.png",
    },
    {
        name: "Play Station 5",
        price: 55000,
        unit: "台",
        src: "/images/omocha_game.png",
    },
    {
        name: "高級ホテル宿泊",
        price: 70000,
        unit: "泊",
        src: "/images/kousou_hotel.png",
    },
    {
        name: "贅沢温泉旅館(ペア)",
        price: 80000,
        unit: "泊",
        src: "/images/building_ryokan.png",
    },
    {
        name: "韓国旅行",
        price: 100000,
        unit: "回",
        src: "/images/food_kimuchi.png",
    },
    {
        name: "歯のホワイトニング",
        price: 120000,
        unit: "人",
        src: "/images/body_ha_good.png",
    },
    {
        name: "iPhone 17 Pro 256GBモデル",
        price: 179800,
        unit: "台",
        src: "/images/smartphone_new.png",
    },
    {
        name: "パソコン",
        price: 250000,
        unit: "台",
        src: "/images/kaden_laptop.png",
    },
    {
        name: "ドラム式洗濯乾燥機",
        price: 280000,
        unit: "台",
        src: "/images/kaden_sentakuki.png",
    },
    {
        name: "MacBook Pro",
        price: 350000,
        unit: "台",
        src: "/images/computer_screen_programming.png",
    },
    {
        name: "世界一周航空券",
        price: 358900,
        unit: "枚",
        src: "/images/Sagrada Família.png",
    },
    {
        name: "高級腕時計",
        price: 500000,
        unit: "個",
        src: "/images/fashion_watch.png",
    },
    {
        name: "オーダーメイドスーツ",
        price: 500000,
        unit: "着",
        src: "/images/suit_man.png",
    },
    {
        name: "歯の矯正",
        price: 900000,
        unit: "人",
        src: "/images/ha_kyousei_man_mouthpiece.png",
    },
    {
        name: "軽自動車(新車)",
        price: 1500000,
        unit: "台",
        src: "/images/car_keijidousya.png",
    },
    {
        name: "家族4人でのハワイ豪華旅行",
        price: 1500000,
        unit: "回",
        src: "/images/hawaii_islands_map.png",
    },
    {
        name: "新車(普通車)",
        price: 2640000,
        unit: "台",
        src: "/images/car_sedan.png",
    },
    {
        name: "世界一周クルーズ",
        price: 3000000,
        unit: "回",
        src: "/images/vacation_cruiser.png",
    },
    {
        name: "大学の学費",
        price: 4500000,
        unit: "人",
        src: "/images/daigaku_toudai.png",
    },
    {
        name: "キャンピングカー",
        price: 4500000,
        unit: "台",
        src: "/images/car_campingcar.png",
    },
    {
        name: "太陽光発電・蓄電池システムの導入",
        price: 6000000,
        unit: "セット",
        src: "/images/denryoku_solar_panels.png",
    },
    {
        name: "高級外車",
        price: 8500000,
        unit: "台",
        src: "/images/car_suv.png",
    },
    {
        name: "1,000万円分の投資元本",
        price: 10000000,
        unit: "回",
        src: "/images/money_toushi_seikou.png",
    },
];

export const LENGTH_EXAMPLE = [
    {
        name: "ゴールデンレトリバー",
        length: 1, // メートル単位
        src: "/images/dog_golden_retriever.png",
    },
    {
        name: "3階建てのビル",
        length: 10,
        src: "/images/building_kaisya_small_blank.png",
    },
    {
        name: "通天閣",
        length: 108,
        src: "/images/tsutenkaku_osaka.png",
    },
    {
        name: "スカイツリー",
        length: 634,
        src: "/images/landmark_tower_skytree.png",
    },
    {
        name: "ブルジュ・ハリファ",
        length: 828,
        src: "/images/highest-building.png",
    },
    {
        name: "阿蘇山",
        length: 1592,
        src: "/images/mountain_yama.png",
    },
    {
        name: "富士山",
        length: 3776,
        src: "/images/fujisan.png",
    },
    {
        name: "エベレストの山頂",
        length: 8848,
        src: "/images/mount_everest.png",
    },
];

export const DOCUMENTS = [
    {
        title: "Number Hunt",
        src: "/images/NumberHuntImg.png",
        link: "https://numberhunt-web.netlify.app/",
    },
    {
        title: "WariCalc",
        src: "/images/WariCalcImg.png",
        link: "https://waricalc-web.netlify.app/",
    },
    {
        title: "Smart Change Calculator",
        src: "/images/SmartChangeCalculator.png",
        link: "https://smartchangecalculator.netlify.app/",
    },
    {
        title: "ちいかわキャラ診断",
        src: "/images/chiikawaSindan.png",
        link: "https://famous-lamington-b0cd03.netlify.app/",
    },
]
        `,
    },
    {
        title: "main.jsx",
        sentence: `
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
        `,
    },
    {
        title: "eslint.config.js",
        sentence: `
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
        `,
    },
    {
        title: "index.html",
        sentence: `
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TabacoScale</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
        `,
    },
    {
        title: "index.css",
        sentence: `
:root {
  --navy: #162d55;
  --darkNavy: #001028;
  --black: #222;
  --darkBlack: #0a0a0a;
  --gray: #666;
  --white: #fff;
  --beige: #f5f5dc;
  --yellow: #fff532;
}

:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: #fff;
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}

a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

h3 {
  color: var(--white);
  margin: 10px;
  font-size: 25px;
}

h4 {
  font-size: 18px;
  color: var(--white);
  background-color: var(--darkBlack);
  padding: 10px 15px;
  border: 2px solid var(--white);
  border-radius: 5px;
}

/* Chrome, Edge, Safari */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}

button:hover {
  border-color: #646cff;
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }

  a:hover {
    color: #747bff;
  }

  button {
    background-color: #f9f9f9;
  }
}
        `,
    },
    {
        title: "Background.jsx",
        sentence: `
import styles from "./Background.module.css";
import bg from "../../assets/white-smoke-for-background.png";

export default function Background() {
  return (
    <>
      <img className={styles.background} src={\`\${bg}\`} alt="whiteSmoke" />
    </>
  )
}
        `,
    },
    {
        title: "Background.module.css",
        sentence: `
.background {
    width: auto;
    height: 85%;
    opacity: 0.2;
    position: fixed;
    right: 0;
    bottom: 0;
    pointer-events: none;
}
        `,
    },
    {
        title: "Button.jsx",
        sentence: `
import styles from "./Button.module.css";

export default function Button({
  disabled=false,
  className="", // ここでundefの排除はできている
  onClick,
  children,
}) {
  return (
    <>
      <button
        disabled={disabled}
        className={\`\${styles.button} \${className}\`}
        onClick={onClick}
      >
        {children ?? "ボタン"}
      </button>
    </>
  )
}
        `,
    },
    {
        title: "Button.module.css",
        sentence: `
.button {
    border: var(--black) solid 2px;
    border-radius: 10px;
    background-color: var(--white);
    font-weight: bold;
    text-align: center;
    
    &.hogeButton {
        margin: 0;
    }
}
        `,
    },
    {
        title: "Codes.jsx",
        sentence: `
import styles from "./Codes.module.css";

export default function Codes({
    title,
    sentence,
}) {

    return (
        <>
            <div className={styles.codeFolder}>
                <p className={styles.codeTitle}>
                    {title}
                </p>
                <pre className={styles.codeSentence}>
                    {sentence}
                </pre>
            </div>
        </>
    );
}
        `,
    },
    {
        title: "Codes.module.css",
        sentence: `
body {
  margin: 0;
  display: flex;
  place-items: unset;
  min-width: 320px;
  min-height: 100vh;
}

.codeFolder {
    text-align: left;
    margin: 0 0 15px;
}

.codeTitle {
    border-radius: 5px;
    font-size: 16px;
    display: inline-block;
    background: var(--darkBlack);
    color: var(--white);
    padding: 2px 10px;
    margin: 0;
}

.codeSentence {
    border-radius: 8px;
    font-size: 10px;
    background: var(--darkBlack);
    color: var(--white);
    padding: 2px 10px;
    margin: 0;
}
        `,
    },
    {
        title: "Display.jsx",
        sentence: `
import { Navigate, useLocation } from "react-router-dom";
import { COMMENT, ROUTES } from "../../const";

import styles from "./Display.module.css";

import TotalMoney from "../TotalMoney/TotalMoney";
import TotalTime from "../TotalTime/TotalTime";
import TotalLength from "../TotalLength/TotalLength";

export default function Display() {

  const location = useLocation();
  const answersList = location.state?.answersList;

  console.log("location.state", location.state);
  console.log("answersList", answersList);

  if (!answersList) {
    return <Navigate to={ROUTES.HOME} />;
  };

  const comment = () => {
    const smokingYear = answersList.reduce((acc, brandAnswers) => {
      const months = Number(brandAnswers[1]);
      const year = months / 12
      return acc + year;
    }, 0);

    const maxDaily = answersList.reduce((max, brandAnswers) => {
      const daily = Number(brandAnswers[0]) || 0; // 空文字対策
      return Math.max(max, daily);
    }, 0);

    if (maxDaily >= 20 && smokingYear >= 3) {
      return COMMENT[2];
    } else if (maxDaily >= 20) {
      return COMMENT[1];
    } else if (smokingYear >= 3) {
      return COMMENT[0];
    }
  }

  return (
    <>
      <br />
      <div
        className={styles.comment}
      >{comment()}</div>

      <TotalMoney
        className={styles.content}
      />

      <TotalTime
        className={styles.content}
      />

      <TotalLength
        className={styles.content}
      />
    </>
  );
};
        `,
    },
    {
        title: "Display.module.css",
        sentence: `
.comment {
    color: var(--white);
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin: 0 20px;
}

.content {
    background-color: var(--black);
    border: 2px solid var(--white);
    border-radius: 10px;
    padding: 20px;
}
        `,
    },
    {
        title: "Documents.jsx",
        sentence: `
import styles from "./Documents.module.css";

export default function Documents({
    title = "",
    imageSrc = "",
    link = "",
}) {

    return (
        <>
            <div className={styles.itemFolder}>
                <a href={link} target="_blank">
                    <p className={styles.title}>
                        {title}
                    </p>
                    <img className={styles.image} src={imageSrc} alt="" />
                </a>
            </div>
        </>
    )
}
        `,
    },
    {
        title: "Documents.module.css",
        sentence: `
.itemFolder {
    margin: 10px 0;
}

.title {
    color: var(--white);
    margin: 0;
    font-size: 18px;
    font-weight: bold;
}

.image {
    border: 2px solid var(--white);
    border-radius: 10px;

    width: 260px;
    height: 130px;
}
        `,
    },
    {
        title: "Header.jsx",
        sentence: `
import { Link } from "react-router-dom"
import { ROUTES } from "../../const"

import "./Header.module.css";
import styles from "./Header.module.css";
import logo from "../../assets/app-logo.PNG";

export default function Header() {

    const data = [
        {
            name: "ホーム",
            path: ROUTES.HOME,
        },
        {
            name: "診断",
            path: ROUTES.DIAGNOSIS,
        },
        {
            name: "コード",
            path: ROUTES.SOURCE,
        },
        {
            name: "その他",
            path: ROUTES.OTHERS,
        },
    ];

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <>
            <div className={styles.header}>
                <Link to={ROUTES.HOME}>
                    <img className={styles.logoImg} src={logo} 
alt="appLogo" />
                </Link>
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.path}
                                className={styles.link}
                                onClick={handleClick}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
        `,
    },
    {
        title: "Header.module.css",
        sentence: `
.header {
    position: fixed;
    top: 0;
    z-index: 10;
}

.logoImg {
    width: auto;
    height: 38px;
    position: fixed;
    left: 0;
    z-index: 10;
    margin: 12px 16px;
}

ul {
    position: fixed;
    left: 0;
    padding: 20px;
    margin: 0;
    display: flex;
    justify-content: right;
    gap: 20px;
    width: 100%;
    list-style: none;
    background-color: var(--white);
    box-sizing: border-box;
}

li {
    position: relative;
}

li:not(:last-child)::after {
    content: "|";
    position: absolute;
    right: -12px;
    color: var(--gray);
}

.link {
    text-decoration: none;
    color: var(--navy);
    font-weight: bold;
    font-size: 18px;
}

.link:hover {
    color: var(--gray);
    border-bottom: var(--gray) solid 1px;
}
        `,
    },
    {
        title: "Input.jsx",
        sentence: `
import styles from "./Input.module.css";

const INPUT_CONFIG = {
  text: {
    placeholder: "ヤマダ タロウ",
    className: styles.textInput,
  },
  number: {
    placeholder: "0",
    className: styles.numberInput,
  },
};

export default function Input({
  type = "number",
  disabled = false,
  className = "",
  value = "",            // ← undefined 対策
  onChange,
  placeholder,
}) {
  const config = INPUT_CONFIG[type] ?? INPUT_CONFIG.number;

  const handleChange = (e) => {
    onChange?.(e.target.value);     // ← 値だけ渡す
  };

  return (
    <input
      type={type}
      disabled={disabled}
      className={\`\${styles.input} \${config.className} \${className}\`}
      value={value}
      onChange={handleChange}
      placeholder={placeholder ?? config.placeholder}
    />
  );
}
        `,
    },
    {
        title: "Input.module.css",
        sentence: `
.input {
    border: var(--black) solid 1.5px;
    border-radius: 5px;
    width: 130px;
    height: 30px;
    font-size: 16px;
    text-align: center;
    margin: 0;
    padding: 0;

    &.numberInput {
        text-align: right;
        padding: 0 10px 0 0;
    }

    &.textInput {
        text-align: center;
    }
}
        `,
    },
    {
        title: "Introduction.jsx",
        sentence: `
import { Link } from "react-router-dom";
import styles from "./Introduction.module.css";
import { ROUTES } from "../../const";

export default function Introduction() {
    return (
        <>
            <div className={styles.introduction}>
                <h1 className={styles.title}>{\`＜タバコスケール＞\`}</h1>
                <pre className={styles.text}>
                    {\`タバコスケールは、
「今までどれくらい吸ってきたんだろう？」を
おもしろく、ちょっとリアルに可視化するアプリです。

これまでに吸ったタバコの本数を
スカイツリーなど実在する建物の高さに例えたり、
タバコに使ったお金を海外旅行
1回分などに置き換えて表示します。

卒煙できた方は、
「もし吸い続けていたら失っていたお金」ではなく、
「実際に節約できた金額」を見ることができます。

数字で見ると、意外と驚くかもしれません。\`}
                </pre>
                <Link className={styles.link} to={ROUTES.DIAGNOSIS}>
                さっそく診断を開始する</Link>
            </div>
        </>
    )
}
        `,
    },
    {
        title: "Introduction.module.css",
        sentence: `
.introduction {
    z-index: 10;
    background-color: var(--black);
    padding: 10px 8px 20px;
    border-radius: 10px;
    border: 2px solid var(--white);
}

.title {
    color: var(--white);
    font-size: 33px;
}

.text {
    color: var(--white);
    font-weight: bold;
    padding: 0 0 8px;
}

.link {
    text-decoration: none;
    color: var(--black);
    padding: 3px 5px;
    border-radius: 3px;
    background-color: var(--yellow);
}
.link:hover {
    color: var(--beige);
}
        `,
    },
    {
        title: "Question.jsx",
        sentence: `
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Question.module.css";

export default function Question({
    children,
    type,
    value,
    className = "",
    placeholder,
    unit,
    onChange,
}) {
    return (
        <>
            <div className={styles.question}>
                <p className={styles.text}>
                    {children}
                </p>
                <div className={styles.input}>
                    <Input
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                    />
                    <p
                        className={styles.unit}
                    >{unit}</p>
                </div>
            </div>
        </>
    );
};
        `,
    },
    {
        title: "Question.module.jsx",
        sentence: `
.question {
    margin: 0 0 18px;
}
.text {
    color: var(--white);
    font-weight: bold;
    font-size: 18px;
    margin: 0px;
    padding: 0;
}
.input {
    display: inline-flex;
    align-items: center;
    margin: 0;
    padding: 0;
}
.unit {
    color: var(--white);
    margin: 5px 0;
    padding: 9.5px 0 0 2.5px;
    font-weight: bold;
}
        `,
    },
    {
        title: "TotalLength.jsx",
        sentence: `
import { Navigate, useLocation } from "react-router-dom";
import { DEFAULT, LENGTH_EXAMPLE, ROUTES, } from "../../const";
import styles from "./TotalLength.module.css";

export default function TotalLength({
    className = "",
}) {

    const location = useLocation();
    const answersList = location.state?.answersList;

    console.log("location.state", location.state);
    console.log("answersList", answersList);

    if (!answersList) {
        alert("エラー: answersList が見つかりませんでした。");
        return <Navigate to={ROUTES.HOME} />;
    };

    function calculateTotalLength(answersList) {
        const totalWastedLength = answersList.reduce((acc, brandAnswers)
        => {
            const daily = Number(brandAnswers[0]);
            const months = Number(brandAnswers[1]);
            const length = Number(brandAnswers[3]) 
            || DEFAULT.LENGTH_PER_CIGARETTE;

            const days = months * 30;

            const totalLength = (daily * days * length) / 1000;

            return acc + totalLength;
        }, 0);

        return totalWastedLength;
    };

    const totalLength = calculateTotalLength(answersList);

    function findClosestLengthExample(totalLength) {
        const sorted = [...LENGTH_EXAMPLE].sort(
            (a, b) => a.length - b.length
        );

        const result = sorted
            .filter(example => totalLength >= example.length)
            .pop();

        return result ?? sorted[0];
    };

    const lengthExample = findClosestLengthExample(totalLength);

    const defaultPixel = 150;

    const lengthRatio = lengthExample.length / totalLength;
    console.log("lengthRatio:" + lengthRatio);

    const buildingPixel = Math.floor(lengthRatio * defaultPixel)
    console.log("itemPixel:" + buildingPixel + "px");

    return (
        <>
            <br />
            <div className={className}>
                <h3 className={styles.title}>
                    あなたがこれまでに吸ったタバコの長さは<br />
                    約 {Math.floor(totalLength).toLocaleString()} m
                </h3>

                <div className={styles.imgFolder}>
                    <img className={styles.tabakoImage} 
                    src="/images/tabako.png" 
                    alt="tabako-image" 
                    style={{ height: defaultPixel }}
                    />
                    <img className={styles.img} src={lengthExample.src} 
                    alt="lengthExample-src"
                        style={{ height: buildingPixel }}
                    />
                </div>

                <p className={styles.sentence}>
                    あなたがこれまでに吸ったタバコを縦に並べると、<br />
                    <strong>{lengthExample.name}
（{lengthExample.length.toLocaleString()}m）</strong>よりも長くなります。
                </p>
            </div>
        </>
    );
};
        `,
    },
    {
        title: "TotalLength.module.css",
        sentence: `
.title {
    font-size: 20px;
}

.subTitle {
    font-size: 18px;
    color: var(--white);
}

.elements {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: 5px;
}

.sentence {
    color: var(--white);
    font-weight: bold;
    text-align: center;
    font-size: 13px;
}

.imgFolder {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    align-items: end;
    gap: 5px;
}

.tabakoImage {
    width: auto;
}

.img {
    width: auto;
}
        `,
    },
    {
        title: "TotalMoney.jsx",
        sentence: `
import { Navigate, useLocation } from "react-router-dom";
import { DEFAULT, MONEY_EXAMPLE, ROUTES } from "../../const";
import styles from "./TotalMoney.module.css";

export default function TotalMoney({
    className = "",
}) {

    const location = useLocation();
    const answersList = location.state?.answersList;

    console.log("location.state", location.state);
    console.log("answersList", answersList);

    if (!answersList) {
        alert("エラー: answersList が見つかりませんでした。");
        return <Navigate to={ROUTES.HOME} />;
    };

    function calculateTotalMoney(answersList) {
        const totalWastedMoney = answersList.reduce((acc, brandAnswers) 
        => {
            const daily = Number(brandAnswers[0]);
            const months = Number(brandAnswers[1]);
            const pricePerBox = Number(brandAnswers[2]) 
            || DEFAULT.PRICE_PER_PACK;

            const days = months * 30;

            const spent = ((daily * days / DEFAULT.CIGARETTES_PER_PACK)
             * pricePerBox) / 10000;

            return acc + spent;
        }, 0);

        return totalWastedMoney;
    };

    const totalMoneyYen = calculateTotalMoney(answersList) * 10000;

    const affordableItems = MONEY_EXAMPLE.filter(item =>
        item.price <= totalMoneyYen
    );

    function shuffleArray(array) {
        return [...array].sort(() => Math.random() - 0.5);
    }
    const selectedItems = shuffleArray(affordableItems).slice(0, 9);

    const resultItems = selectedItems.map(item => {
        const count = Math.max(
            1,
            Math.floor(totalMoneyYen / item.price)
        );

        const formattedCount = count.toLocaleString();

        return {
            ...item,
            formattedCount,
            count,
        };
    });

    return (
        <>
            <br />
            <div className={className}>
                <h3 className={styles.title}>
                    あなたが今までタバコに使ったお金は<br />
                    約{(calculateTotalMoney(answersList))
                        .toFixed(2)
                        .toLocaleString() * 1}万円です。
                        {/* 小数の0をカットするために1をかけている */}
                </h3>
                <h4 className={styles.subTitle}>
                    使ったお金を身近なものに例えると...？
                </h4>

                <div className={styles.elements}>
                    {resultItems.map((item, index) => (
                        <div key={index}>
                            <p className={styles.sentence}>
                                {item.name}：{item.formattedCount}
                                {item.unit}分
                            </p>
                            <img className={styles.img} src={item.src}
                            alt={item.name} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};
        `,
    },
    {
        title: "TotalMoney.module.css",
        sentence: `
.title {
    font-size: 20px;
}

.subTitle {
    font-size: 18px;
    color: var(--white);
}

.elements {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    text-align: center;
    gap: 5px;
}

.sentence {
    color: var(--white);
    font-weight: bold;
    text-align: center;
    font-size: 13px;
}

.img {
    width: 80px;
    height: 80px;
}
        `,
    },
    {
        title: "TotalTime.jsx",
        sentence: `
import { Navigate, useLocation } from "react-router-dom";
import { DEFAULT, ROUTES, TIME_EXAMPLE } from "../../const";
import styles from "./TotalTime.module.css";

export default function TotalTime({
    className = "",
}) {

    const location = useLocation();
    const answersList = location.state?.answersList;

    console.log("location.state", location.state);
    console.log("answersList", answersList);

    if (!answersList) {
        alert("エラー: answersList が見つかりませんでした。");
        return <Navigate to={ROUTES.HOME} />;
    };

    function calculateTotalTime(answersList) {
        const totalWastedTime = answersList.reduce((acc, 
        brandAnswers) => {
            const daily = Number(brandAnswers[0]);
            const months = Number(brandAnswers[1]);

            const days = months * 30;

            const totalTime = (daily * days * 
            DEFAULT.MINUTES_PER_CIGARETTE) / 60;

            return acc + totalTime;
        }, 0);

        return totalWastedTime;
    };

    const totalTime = calculateTotalTime(answersList);

    function findClosestTimeExample(totalTime) {
        return TIME_EXAMPLE
            .filter(item => item.lostTime <= totalTime)
            .reduce((closest, current) => {
                if (!closest) return current;
                return current.lostTime > closest.lostTime
                    ? current
                    : closest;
            }, null);
    };
    const closestExample = findClosestTimeExample(totalTime);

    function formatTimeComment(comment, totalTime) {
        return comment.replace(
            "【TIME】",
            totalTime.toLocaleString()
        );
    }

    return (
        <>
            <br />
            <div className={className}>
                <h3 className={styles.title}>
                    あなたが今までタバコに使った時間は<br />
                    約{totalTime.toLocaleString()}時間です。
                </h3>

                {closestExample && (
                    <div>
                        <p className={styles.sentence}>
                            これは「{closestExample.example}」
                            に相当します。<br />{formatTimeComment(
                                closestExample.comment,
                                totalTime
                            )}
                        </p>
                        <img
                            className={styles.img}
                            src={closestExample.src}
                            alt={closestExample.example}
                        />
                    </div>
                )}
            </div>
        </>
    )
};
        `,
    },
    {
        title: "TotalTime.module.css",
        sentence: `
.title {
    font-size: 20px;
}

.subTitle {
    font-size: 18px;
    color: var(--white);
}

.elements {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    text-align: center;
    gap: 5px;
}

.sentence {
    color: var(--white);
    font-weight: bold;
    text-align: center;
    font-size: 16px;
    padding: 0 20px;
}

.img {
    width: 240px;
    height: 240px;
}
        `,
    },
    {
        title: "DiagnosisPage.jsx",
        sentence: `
import { useNavigate } from "react-router-dom";
import Question from "../components/Question/Question";
import { QUESTIONS, ROUTES } from "../const";
import { useEffect, useState } from "react";
import Button from "../components/Button/Button";

export default function DiagnosisPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.RESULT, {
      state: {
        answersList,
      },
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [answersList, setAnswersList] = useState([
    QUESTIONS.map(() => "")
  ]);

  // const handleChange = (index, value) => {
  //   const newAnswers = [...answersList];
  //   newAnswers[index] = value;
  //   setAnswersList(newAnswers);
  // };

  const handleAddBrand = () => {
    setAnswersList(prev => [
      ...prev,
      QUESTIONS.map(() => "")
    ]);
  };

  const isAllRequiredAnswered = answersList.every((brandAnswers) =>
    QUESTIONS.every((q, qIndex) => {
      if (!q.required) return true;
      return String(brandAnswers[qIndex]).trim() !== "";
    })
  );

  return (
    <>
      <br />
      {answersList.map((answers, brandIndex) => (
        <div key={brandIndex}>
          <h3>銘柄 {brandIndex + 1}</h3>

          {QUESTIONS.map((q, qIndex) => (
            <Question
              key={qIndex}
              type={q.type}
              value={answers[qIndex]}
              onChange={(v) => {
                const newList = [...answersList];
                newList[brandIndex][qIndex] = v;
                setAnswersList(newList);
              }}
              placeholder={q.placeholder}
              unit={q.unit}
            >
              {q.question}
            </Question>
          ))}
        </div>
      ))};

      <Button
        onClick={() => handleAddBrand()}
      >
        他の銘柄を追加
      </Button>

      <Button
        disabled={!isAllRequiredAnswered}
        onClick={handleClick}
      >
        結果を確認する
      </Button>
    </>
  )
};
        `,
    },
    {
        title: "HomePage.jsx",
        sentence: `
import { useEffect } from "react";
import Introduction from "../components/Introduction/Introduction"

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <br />
      <br />
      <Introduction />
    </>
  )
}
        `,
    },
    {
        title: "OthersPage.jsx",
        sentence: `
import { useEffect } from "react"
import Documents from "../components/Documents/Documents";
import { DOCUMENTS } from "../const";

export default function OthersPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <br />
      <h4>
        他の開発したアプリケーション一覧です。<br />
        勉強がてら制作したのでクオリティは微妙です
      </h4>
      {DOCUMENTS.map((item, index) => (
        <Documents
          title={item.title}
          imageSrc={item.src}
          link={item.link}
        />
      ))}
    </>
  );
}
        `,
    },
    {
        title: "ResultPage.jsx",
        sentence: `
import { Navigate, useLocation } from "react-router-dom";
import { COMMENT, DEFAULT, MONEY_EXAMPLE, ROUTES } from "../const";
import Display from "../components/Display/Display";
import { useEffect } from "react";

export default function ResultPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Display></Display>
    </>
  );
};
        `,
    },
    {
        title: "SourcePage.jsx",
        sentence: `
import { useEffect } from "react";
import { CODES } from "../codes";
import Codes from "../components/Codes/Codes";

export default function SourcePage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <br />
      {CODES.map((CODES, index) => (
        <Codes
          title={CODES.title}
          sentence={CODES.sentence}
        />
      ))}
    </>
  );
};
        `,
    },
]