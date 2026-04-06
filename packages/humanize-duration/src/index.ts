import baseHumanizeDuration from "humanize-duration";

type DarijaHumanizerOptions = NonNullable<Parameters<typeof baseHumanizeDuration.humanizer>[0]>;
export type DarijaHumanizeOptions = NonNullable<
  Parameters<ReturnType<typeof baseHumanizeDuration.humanizer>>[1]
>;
type UnitTranslationOptions = NonNullable<DarijaHumanizerOptions["languages"]>[string];

type TranslationForms = {
  one: string;
  two: string;
  few: string;
  teen: string;
  many: string;
};

const darijaLanguage = "darija";

const createUnitTranslator = (forms: TranslationForms) => {
  return (count?: number): string => {
    if (!count) {
      return "";
    }

    if (count === 1) {
      return forms.one;
    }

    if (count === 2) {
      return forms.two;
    }

    if (count >= 3 && count <= 10) {
      return `${count} ${forms.few}`;
    }

    if (count >= 11 && count <= 19) {
      return `${count} ${forms.teen}`;
    }

    return `${count} ${forms.many}`;
  };
};

const darijaTranslations = {
  y: createUnitTranslator({
    one: "عام",
    two: "عاماين",
    few: "سنين",
    teen: "لعام",
    many: "عام",
  }),
  mo: createUnitTranslator({
    one: "شهر",
    two: "شهراين",
    few: "شهور",
    teen: "لشهر",
    many: "شهر",
  }),
  w: createUnitTranslator({
    one: "سيمانة",
    two: "2 سيمانات",
    few: "د السيمانات",
    teen: "لسيمانة",
    many: "سيمانة",
  }),
  d: createUnitTranslator({
    one: "نهار",
    two: "يوماين",
    few: "ايام",
    teen: "ليوم",
    many: "يوم",
  }),
  h: createUnitTranslator({
    one: "ساعة",
    two: "ساعتاين",
    few: "د السوايع",
    teen: "لساعة",
    many: "ساعة",
  }),
  m: createUnitTranslator({
    one: "دقيقة",
    two: "2 دقايق",
    few: "الدقايق",
    teen: "لدقيقة",
    many: "دقيقة",
  }),
  s: createUnitTranslator({
    one: "ثانية",
    two: "2 ثواني",
    few: "د الثواني",
    teen: "لثانية",
    many: "ثانية",
  }),
  ms: createUnitTranslator({
    one: "جزء ثانية",
    two: "2 أجزاء ثانية",
    few: "د الأجزاء ثانية",
    teen: "لجزء ثانية",
    many: "جزء ثانية",
  }),
} satisfies UnitTranslationOptions;

const defaultHumanizerOptions = {
  language: darijaLanguage,
  languages: {
    [darijaLanguage]: darijaTranslations,
  },
  units: ["y", "mo", "w", "d", "h", "m"],
  delimiter: "، ",
  spacer: "",
  round: true,
  largest: 2,
  digitReplacements: ["", "", "", "", "", "", "", "", "", ""],
  conjunction: " و ",
  serialComma: false,
} satisfies DarijaHumanizerOptions;

const darijaHumanizer = baseHumanizeDuration.humanizer(defaultHumanizerOptions);

const humanizeDuration = (
  duration: number,
  options: DarijaHumanizeOptions = {},
): string => {
  return darijaHumanizer(duration, options);
};

export default humanizeDuration;
