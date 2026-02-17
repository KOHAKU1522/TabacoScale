import { Link } from "react-router-dom";

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
        placeholder: `（平均）${DEFAULT.PRICE_PER_PACK}`,
        unit: "円",
        required: false,
    },
    {
        question: "1本の長さ",
        type: "number",
        placeholder: `（平均）${DEFAULT.LENGTH_PER_CIGARETTE}`,
        unit: "mm",
        required: false,
    },
];

export const COMMENT = [
    "長い間ずっと付き合ってますね…あなたのタバコ歴、かなりのベテランです。",
    "毎日の本数がすごい… あなたはまさにヘビースモーカー！",
    "これは… 長期×大量で、あなたは紛れもないヘビースモーカーですね！",
];

export const TIME_EXAMPLE = [
    {
        lostTime: 1, //1箱未満
        example: "映画1本分",
        comment: "タバコ約15本分。映画1本の感動を、煙に変えてしまいました。",
        src: "/images/kandou_movie_happy.png",
    },
    {
        lostTime: 10, // 8箱
        example: "読書3冊分",
        comment: "スマホの電源を切って、泥のように眠れたはずの時間です。",
        src: "/images/entertainment_set.png",
    },
    {
        lostTime: 100, // 85箱
        example: "ITパスポート取得に必要とされる時間",
        comment: "【TIME】時間あれば、昨日までの自分にはできなかったことが、ひとつ『特技』に変わります。",
        src: "/images/computer_tokui_boy.png",
    },
    {
        lostTime: 500, // 85箱
        example: "宅建士合格に必要とされる時間",
        comment: "【TIME】時間。それは、ただの数字ではなく、あなたが『新しい肩書き』を手に入れるのに十分な時間です。",
        src: "/images/fudousanya.png",
    },
    {
        lostTime: 1000, //857箱
        example: "「英検準1級・TOEIC 800点」クラスの語学力を身に着けるのに必要な時間",
        comment: "【TIME】時間。それは、あなたが心から望めば『別の自分』に生まれ変われるほどの魔法の時間です。",
        src: "/images/teacher_tensaku_white_woman.png",
    },
    {
        lostTime: 1500, //1285箱
        example: "新しい職種へキャリアチェンジするのに十分な時間",
        comment: "【TIME】時間。これは、ひとつの職業を新しく身につけられるほどの大切な時間です。",
        src: "/images/taisyoku_hanataba_young_man.png",
    },
    {
        lostTime: 2000, //1714箱
        example: "難関国家資格の「ダブル・トリプル取得」に必要とされる時間",
        comment: "例えば、行政書士（約600時間）、宅建士（約300時間）、管理業務主任者（約300時間）の3つをすべて取っても、まだ800時間余ります。",
        src: "/images/test_shiken_businessman.png",
    },
    {
        lostTime: 3000, //2571箱
        example: "司法書士試験の合格に必要とされる時間",
        comment: "超難関資格の一つ。1500時間〜3000時間の学習が必要とされており、法律の専門家として事務所を構えることさえ可能です。",
        src: "/images/badge_shihou_syoshi.png",
    },
    {
        lostTime: 4000, //箱
        example: "難関大学合格に必要とされる時間",
        comment: "人生の土台をもう一度作り直せる時間。",
        src: "/images/daigaku_toudai.png",
    },
    {
        lostTime: 5000, //箱
        example: "一級建築士の取得と実務への習熟に必要とされる時間",
        comment: "合格に必要な膨大な学習時間だけでなく、設計の実務経験を含めて「一人前の建築家」として街に形を残す仕事ができ始める時間です。",
        src: "/images/job_kenchikuka.png",
    },
    {
        lostTime: 6000, //箱
        example: "税理士試験 全5科目の合格に必要とされる時間",
        comment: "「【TIME】時間。それは、社会があなたを『かけがえのない専門家』として仰ぎ見るほどの、尊い積み重ねの時間です。",
        src: "/images/badge_zeirishi.png",
    },
    {
        lostTime: 7000, //箱
        example: "「子供が小学校を卒業するまでの授業時間」に近いボリューム",
        comment: "あなたはこれまでに、一人の人間が義務教育を経て大きく成長するのと同じくらいの月日を、タバコという習慣に捧げてきました",
        src: "/images/sotsugyo_syousyo.png",
    },
    {
        lostTime: 8000, //箱
        example: "司法試験合格に必要とされる時間",
        comment: "社会のルールを司るプロになれた時間。",
        src: "/images/badge_bengoshi.png",
    },
    {
        lostTime: 9000, //箱
        example: "地球を徒歩で1往復するのにかかる時間",
        comment: "【TIME】時間。それは、あなたが小説を80冊書き上げたり、あるいは二つの大学を卒業して人生を二度生きるのと、同じだけの重みがある時間です",
        src: "/images/space04_earth.png",
    },
    {
        lostTime: 10000, //箱
        example: "1万時間の法則",
        comment: "【TIME】時間をタバコに使えたあなたは、それだけの『継続する力』を持っています。その力を今日から別のことに向けたら、あなたはきっと、また新しい世界の達人になれるはずです。",
        src: "/images/nigaoe_leonardo_da_vinci.png",
    },
    {
        lostTime: 15000, //箱
        example: "プロの漫画家として連載を完結させる時間",
        comment: "【TIME】時間。それは、未経験から始めた仕事でも、試行錯誤を繰り返し、周囲から『プロ』と認められ、自立して生きていく力を手に入れられる時間です。",
        src: "/images/manga_genkou.png",
    },
    {
        lostTime: 20000, //箱
        example: "5ヶ国語をマスターし、世界を庭にする時間",
        comment: "いくつもの才能を完璧に開花させられた時間。",
        src: "/images/sekaichizu.png",
    },
    {
        lostTime: 25000, //箱
        example: "小学校入学から高校卒業までの時間",
        comment: "一人の子供が大人になるまでの、学びのすべてを注げる時間。",
        src: "/images/sotsugyo_syousyo.png",
    },
    {
        lostTime: 30000, //箱
        example: "宇宙飛行士を目指し、訓練を完遂できる時間",
        comment: "税理士、エンジニア、翻訳家…。多才な自分に出会えたはずの時間。",
        src: "/images/space_uchusen_bg.png",
    },
    {
        lostTime: 35000, //箱
        example: "オリンピック選手として頂点を目指せる時間",
        comment: "世界の仕組みを解き明かす智恵を手にできた時間。あなたの聡明さは、煙の向こう側でずっと出番を待っています。",
        src: "/images/olympics_title.png",
    },
    {
        lostTime: 40000, //箱
        example: "20年分の熟練工として国宝級の技を磨く時間",
        comment: "一つの職業を定年近くまで全うするほどの重み。それだけの情熱を注げたあなたなら、どんな壁も必ず越えられます。",
        src: "/images/job_nihontou_katanakaji.png",
    },
    {
        lostTime: 45000, //箱
        example: "大西洋をヨットで何度も往復できる時間",
        comment: "【TIME】時間。フルタイムの仕事に換算すれば約22年。人生の半分近い歳月を、あなたは一つの習慣と共に歩んできました。",
        src: "/images/ocean_kyodai_seibutsu.png",
    },
    {
        lostTime: 50000, //箱
        example: "1つの人生の黄金期そのもの",
        comment: "起きている時間の約10年分を捧げた、まさに「もう一つの人生」そのもの。",
        src: "/images/hotoke_senju_kannon.png",
    },
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