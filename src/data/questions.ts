export interface Question {
  id: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
}

export interface TestData {
  title: string;
  description: string;
  questions: Question[];
}

// ========================================
// ADD YOUR QUESTIONS HERE
// ========================================
// To add questions, modify the testData object below
// Each question should have:
// - id: unique number
// - question: the question text
// - options: object with A, B, C, D properties
// - correctAnswer: one of 'A', 'B', 'C', 'D'

export const allTests: TestData[] = [
  { title: "Hindi Language Test", description: "Hindi chapter 12, 13, 14, 15",
    questions: [
      {
        id: 1,
        question: "निम्नलिखित पंक्तियों में कौन सा रस है? 'शोभित कर नवनीत लिए घुटूनी चलत रेनू तन मंडित मुख दधि लेप किए।'",
        options: {
          A: "वीर रस",
          B: "श्रृंगार रस",
          C: "वात्सल्य रस",
          D: "करुण रस"
        },
        correctAnswer: "C"
      },{
id: 2,
question: "रसोत्पत्ति में आश्रय की चेष्टाओं को क्या कहा जाता है?",
options: {
A: "अनुभाव",
B: "विभाव",
C: "अनुभूति",
D: "संचारी"
},
correctAnswer: "A"
},
{
id: 3,
question: "रस संप्रदाय के प्रवर्तक कौन हैं?",
options: {
A: "नंदकेश्वर",
B: "भरत मुनि",
C: "शास्त्री",
D: "कालिदास"
},
correctAnswer: "B"
},
{
id: 4,
question: "रस के कितने अंग होते हैं?",
options: {
A: "2",
B: "3",
C: "4",
D: "5"
},
correctAnswer: "C"
},
{
id: 5,
question: "माधुर्य गुण किस रस में प्रयोग होता है?",
options: {
A: "माधुर्य",
B: "वीरता",
C: "करुणा",
D: "अद्भुत"
},
correctAnswer: "A"
},
{
id: 6,
question: "जगड़ छंद में कितने लघु वर्ण होते हैं?",
options: {
A: "2",
B: "3",
C: "4",
D: "6"
},
correctAnswer: "B"
},
{
id: 7,
question: "जगड़ छंद में कितने गुरु वर्ण होते हैं?",
options: {
A: "11",
B: "12",
C: "14",
D: "15"
},
correctAnswer: "A"
},
{
id: 8,
question: "'मुदित महपति मंदिर आए सेवक सचिव सुमंत बुलाए' इन पंक्तियों में कौन सा अलंकार है?",
options: {
A: "श्लेष अलंकार",
B: "अनुप्रास अलंकार",
C: "उपमा अलंकार",
D: "यमक अलंकार"
},
correctAnswer: "B"
},
{
id: 9,
question: "'सपना सपना समझकर भूल ना जाना' इन पंक्तियों में कौन सा अलंकार है?",
options: {
A: "उपमा",
B: "प्रतीक",
C: "यमक",
D: "अनुप्रास"
},
correctAnswer: "C"
},
{
id: 10,
question: "'नील गगन सा शांत हृदय था सो रहा' इन पंक्तियों में कौन सा अलंकार है?",
options: {
A: "रूपक",
B: "उपमा",
C: "अतिशयोक्ति",
D: "श्लेष"
},
correctAnswer: "B"
},
{
id: 11,
question: "'फूल हसे और कलियां मुस्काएं' में कौन सा अलंकार है?",
options: {
A: "उपमा",
B: "मानवीकरण",
C: "अनुप्रास",
D: "यमक"
},
correctAnswer: "B"
},
{
id: 12,
question: "पदबंध में 'कछुआ धीरे-धीरे चलते हुए मंजिल तक पहुंच गया।' कौन सा पदबंध है?",
options: {
A: "समास",
B: "क्रिया विशेषण पद",
C: "संधि",
D: "तत्पुरुष"
},
correctAnswer: "B"
},
{
id: 13,
question: "संधि में 'अन्वेषण' शब्द का विच्छेद क्या है?",
options: {
A: "अनु + एषण",
B: "अन + वेषण",
C: "अनु + शोध",
D: "अन + शोध"
},
correctAnswer: "A"
},
{
id: 14,
question: "'पंचवटी' शब्द में कौन सा समास है?",
options: {
A: "द्विगु समास",
B: "तत्पुरुष समास",
C: "बहुव्रीहि समास",
D: "कर्मधारय समास"
},
correctAnswer: "A"
},
{
id: 15,
question: "'रोगग्रस्त' शब्द में कौन सा समास है?",
options: {
A: "तत्पुरुष समास",
B: "द्वंद्व समास",
C: "कर्मधारय समास",
D: "बहुव्रीहि समास"
},
correctAnswer: "A"
},
{
id: 16,
question: "'वीरबाला' में कौन सा समास है?",
options: {
A: "तत्पुरुष समास",
B: "द्वंद समास",
C: "कर्मधारय समास",
D: "बहुव्रीहि समास"
},
correctAnswer: "C"
},
{
id: 17,
question: "स्वर के साथ स्वर मिलने से जो विकार होता है उसे क्या कहते हैं?",
options: {
A: "स्वर संधि",
B: "व्यंजन संधि",
C: "विसर्ग संधि",
D: "गुण संधि"
},
correctAnswer: "A"
},
{
id: 18,
question: "'देव जो महान है' किस समास का उदाहरण है?",
options: {
A: "द्वंद्व समास",
B: "कर्मधारय समास",
C: "तत्पुरुष समास",
D: "बहुव्रीहि समास"
},
correctAnswer: "B"
},
{
id: 19,
question: "'नवरात्र' में कौन सा समास होता है?",
options: {
A: "बहुव्रीहि समास",
B: "तत्पुरुष समास",
C: "द्विगु समास",
D: "द्वंद्व समास"
},
correctAnswer: "C"
},
{
id: 20,
question: "प्रसिद्ध ग्रंथ 'नाट्यशास्त्र' के लेखक कौन हैं?",
options: {
A: "भरत मुनि",
B: "भामा",
C: "डंडी",
D: "उद्भट"
},
correctAnswer: "A"
},
{
id: 21,
question: "आनंदवर्धन ने कौन सी रचना की है?",
options: {
A: "ध्वन्यालोक",
B: "काव्य मीमांसा",
C: "काव्यालंकार",
D: "नाट्यशास्त्र"
},
correctAnswer: "A"
},
{
id: 22,
question: "वक्रोक्ति संप्रदाय के प्रवर्तक कौन हैं?",
options: {
A: "भामा",
B: "कुंतक",
C: "आनंदवर्धन",
D: "डंडी"
},
correctAnswer: "B"
},
{
id: 23,
question: "संस्कृत के भट्ट नायक की प्रमुख रचना क्या है?",
options: {
A: "हृदय दर्पण",
B: "रस गंगाधर",
C: "काव्य मीमांसा",
D: "वक्रोक्ति जीवितम"
},
correctAnswer: "A"
},
{
id: 24,
question: "'निरोग' में प्रयुक्त संधि कौन सी है?",
options: {
A: "विसर्ग संधि",
B: "गुण संधि",
C: "दीर्घ संधि",
D: "वृद्धि संधि"
},
correctAnswer: "A"
},
{
id: 25,
question: "किस शब्द में अव्ययीभाव समास नहीं माना जाता?",
options: {
A: "चतुरानन",
B: "चतुर्भुज",
C: "यथा",
D: "प्रति"
},
correctAnswer: "A"
},
{
id: 26,
question: "आप घर जाएंगे या पार्क जाएंगे। यह वाक्य किस प्रकार का है?",
options: {
A: "संयुक्त वाक्य",
B: "मिश्र वाक्य",
C: "सरल वाक्य",
D: "प्रश्नवाचक वाक्य"
},
correctAnswer: "B"
},
{
id: 27,
question: "'गड़े मुर्दे उखाड़ना' मुहावरे का अर्थ क्या है?",
options: {
A: "भूत से डरना",
B: "बात छुपाना",
C: "दबी हुई बात फिर से उभारना",
D: "मुर्दा दफनाना"
},
correctAnswer: "C"
},
{
id: 28,
question: "'सर्वोत्तम' शब्द का संधि विच्छेद क्या है?",
options: {
A: "सर् + उत्तम",
B: "सर्व + उत्तम",
C: "सर्व + उत्ताम",
D: "सर् + उत्ताम"
},
correctAnswer: "B"
},
{
id: 29,
question: "वज्रायुध में कौन-सा समास है?",
options: {
A: "बहुव्रीहि",
B: "द्वंद्व",
C: "द्विगु",
D: "अव्ययीभाव"
},
correctAnswer: "A"
},
{
id: 30,
question: "'अकाउंटेबिलिटी' का सही पारिभाषिक शब्द क्या है?",
options: {
A: "योग्यता",
B: "उत्तरदायित्व",
C: "लेखा शीर्ष",
D: "जवाबदेही"
},
correctAnswer: "B"
}]
  },
  { title: "Subject name", description: "--------",
    questions: [
      {
        id: 1,
        question: "question number 1 ",
        options: {
          A: "A",
          B: "B",
          C: "C",
          D: "D"
        },
        correctAnswer: "B"
      },
      {
        id: 2,
        question: "question number 2",
        options: {
          A: "96",
          B: "84",
          C: "102",
          D: "88"
        },
        correctAnswer: "A"
      },
      {
        id: 3,
        question: "question number 3",
        options: {
          A: "6",
          B: "7",
          C: "8",
          D: "9"
        },
        correctAnswer: "C"
      },
      {
        id: 4,
        question: "question number 4",
        options: {
          A: "4",
          B: "5",
          C: "6",
          D: "7"
        },
        correctAnswer: "B"
      },
      {
        id: 5,
        question: "question number 5",
        options: {
          A: "6",
          B: "8",
          C: "9",
          D: "12"
        },
        correctAnswer: "B"
      }
    ]
  },
  { title: "subject name", description: "--------",
    questions: [
      {
        id: 1,
        question: "question number 1",
        options: {
          A: "Venus",
          B: "Mars",
          C: "Jupiter",
          D: "Saturn"
        },
        correctAnswer: "B"
      },
      {
        id: 2,
        question: "question number 2",
        options: {
          A: "H2O",
          B: "CO2",
          C: "NaCl",
          D: "O2"
        },
        correctAnswer: "A"
      },
      {
        id: 3,
        question: "question number 3",
        options: {
          A: "198",
          B: "206",
          C: "214",
          D: "220"
        },
        correctAnswer: "B"
      },
      {
        id: 4,
        question: "question number 4",
        options: {
          A: "Oxygen",
          B: "Nitrogen",
          C: "Carbon Dioxide",
          D: "Hydrogen"
        },
        correctAnswer: "C"
      },
      {
        id: 5,
        question: "question number 5",
        options: {
          A: "300,000 km/s",
          B: "150,000 km/s",
          C: "450,000 km/s",
          D: "600,000 km/s"
        },
        correctAnswer: "A"
      }
    ]
  },
  { title: "सामाजिक अध्ययन-D.El.Ed बिहार परीक्षा",description: "Bihar D.El.Ed परीक्षा के लिए सामाजिक अध्ययन के 20 पिछली परीक्षाओं के प्रश्न (हिंदी माध्यम)",
  questions: [
    {
      id: 1,
      question: "‘नीली क्रांति’ किससे संबंधित है?",
      options: {
        A: "सिंचाई",
        B: "मांस उत्पादन",
        C: "कृषि",
        D: "मछली पालन"
      },
      correctAnswer: "D"
    },
    {
      id: 2,
      question: "विश्व व्यापार संगठन (WTO) का मुख्यालय कहाँ है?",
      options: {
        A: "जिनेवा",
        B: "न्यूयॉर्क",
        C: "पेरिस",
        D: "वॉशिंगटन डी.सी."
      },
      correctAnswer: "A"
    },
    {
      id: 3,
      question: "ईसाई धर्म का पवित्र ग्रंथ कौन सा है?",
      options: {
        A: "रामायण",
        B: "गीता",
        C: "बाइबिल",
        D: "कुरान"
      },
      correctAnswer: "C"
    },
    {
      id: 4,
      question: "पुरी (ओडिशा) का सूर्य मंदिर किस शताब्दी में बना था?",
      options: {
        A: "11वीं",
        B: "13वीं",
        C: "15वीं",
        D: "17वीं"
      },
      correctAnswer: "B"
    },
    {
      id: 5,
      question: "यदि राष्ट्रपति व उपराष्ट्रपति दोनों पद रिक्त हों तो कार्यवाहक राष्ट्रपति कौन बनता है?",
      options: {
        A: "प्रधानमंत्री",
        B: "लोकसभा अध्यक्ष",
        C: "मुख्य न्यायाधीश",
        D: "राज्यसभा उपाध्यक्ष"
      },
      correctAnswer: "C"
    },
    {
      id: 6,
      question: "संविधान का भाग III किसका उल्लेख करता है?",
      options: {
        A: "राज्य नीति निदेशक तत्व",
        B: "मौलिक अधिकार",
        C: "प्रधानमंत्री की शक्तियाँ",
        D: "संघ सरकार"
      },
      correctAnswer: "B"
    },
    {
      id: 7,
      question: "बिहार का शोक किस नदी को कहा जाता है?",
      options: {
        A: "गंडक",
        B: "कोसी",
        C: "गंगा",
        D: "सरयू"
      },
      correctAnswer: "B"
    },
    {
      id: 8,
      question: "‘चिपको आंदोलन’ किससे संबंधित था?",
      options: {
        A: "वन संरक्षण",
        B: "जल संरक्षण",
        C: "महिला अधिकार",
        D: "औद्योगिकीकरण"
      },
      correctAnswer: "A"
    },
    {
      id: 9,
      question: "भारत में पंचायती राज की शुरुआत सबसे पहले किस राज्य में हुई थी?",
      options: {
        A: "बिहार",
        B: "राजस्थान",
        C: "उत्तर प्रदेश",
        D: "मध्य प्रदेश"
      },
      correctAnswer: "B"
    },
    {
      id: 10,
      question: "बौद्ध धर्म के संस्थापक कौन हैं?",
      options: {
        A: "महावीर",
        B: "गौतम बुद्ध",
        C: "रामकृष्ण परमहंस",
        D: "अशोक"
      },
      correctAnswer: "B"
    },
    {
      id: 11,
      question: "कुंभ मेला विशेष रूप से किस नदी के किनारे आयोजित होता है?",
      options: {
        A: "गंगा",
        B: "यमुना",
        C: "गंडक",
        D: "कोसी"
      },
      correctAnswer: "A"
    },
    {
      id: 12,
      question: "सार्क (SAARC) संगठन का मुख्यालय कहाँ है?",
      options: {
        A: "दिल्ली",
        B: "ढाका",
        C: "काठमांडू",
        D: "इस्लामाबाद"
      },
      correctAnswer: "C"
    },
    {
      id: 13,
      question: "दांडी यात्रा आरंभ करने वाले स्वतंत्रता सेनानी कौन थे?",
      options: {
        A: "सुभाष चंद्र बोस",
        B: "भगत सिंह",
        C: "महात्मा गांधी",
        D: "पंडित नेहरू"
      },
      correctAnswer: "C"
    },
    {
      id: 14,
      question: "भारत के वर्तमान चुनाव आयोग के सदस्य कितने होते हैं?",
      options: {
        A: "1",
        B: "2",
        C: "3",
        D: "4"
      },
      correctAnswer: "C"
    },
    {
      id: 15,
      question: "भारतीय संविधान सभा के स्थायी अध्यक्ष कौन थे?",
      options: {
        A: "डॉ राजेंद्र प्रसाद",
        B: "भीम राव अंबेडकर",
        C: "जवाहरलाल नेहरू",
        D: "सरदार पटेल"
      },
      correctAnswer: "A"
    },
    {
      id: 16,
      question: "हड़प्पा सभ्यता किस नदी के किनारे स्थित थी?",
      options: {
        A: "गंगा",
        B: "सिंधु",
        C: "कावेरी",
        D: "यमुना"
      },
      correctAnswer: "B"
    },
    {
      id: 17,
      question: "भारत में 'हरित क्रांति' का श्रेय किसे दिया जाता है?",
      options: {
        A: "एम.एस. स्वामीनाथन",
        B: "नॉर्मन बोरलॉग",
        C: "हरगोविंद खुराना",
        D: "सुब्रमण्यम"
      },
      correctAnswer: "A"
    },
    {
      id: 18,
      question: "कोयंबटूर किसे कहा जाता है?",
      options: {
        A: "ईस्ट इंडिया का मैनचेस्टर",
        B: "साउथ इंडिया का मैनचेस्टर",
        C: "नॉर्थ इंडिया का मैनचेस्टर",
        D: "वेस्ट इंडिया का मैनचेस्टर"
      },
      correctAnswer: "B"
    },
    {
      id: 19,
      question: "रामचरितमानस के रचयिता कौन हैं?",
      options: {
        A: "कबीर",
        B: "महात्मा गांधी",
        C: "तुलसीदास",
        D: "रहीम"
      },
      correctAnswer: "C"
    },
    {
      id: 20,
      question: "भारत का सबसे बड़ा राज्य क्षेत्रफल की दृष्टि से कौन सा है?",
      options: {
        A: "उत्तर प्रदेश",
        B: "महाराष्ट्र",
        C: "मध्य प्रदेश",
        D: "राजस्थान"
      },
      correctAnswer: "D"
    }
  ]
}








];