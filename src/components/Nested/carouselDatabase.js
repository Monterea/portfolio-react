import jirikKalendar from "../../assets/pictures/carousel/JirikKalendar.png";
import beaKalendar from "../../assets/pictures/carousel/beaKalendar.png";
import bakugan from "../../assets/pictures/carousel/bakugan.jpg";
import dansptaky from "../../assets/pictures/carousel/danSptaky.jpg";
import drak from "../../assets/pictures/carousel/drak.jpg";
import fenix from "../../assets/pictures/carousel/fenix.jpg";
import garfieldarakosnicek from "../../assets/pictures/carousel/garfieldArakosnicek.jpg";
import karmickaastrologie from "../../assets/pictures/carousel/Karmická astrologie3.jpg";
import lodka from "../../assets/pictures/carousel/lodka.jpg";
import magickyhrnek from "../../assets/pictures/carousel/magickyHrnek.jpg";
import motylci from "../../assets/pictures/carousel/motylci.jpg";
import nato from "../../assets/pictures/carousel/nato.jpg";
import radix1 from "../../assets/pictures/carousel/Radix1.jpg";
import radix2 from "../../assets/pictures/carousel/Radix2.jpg";
import radix8 from "../../assets/pictures/carousel/Radix8.jpg";
import robutek from "../../assets/pictures/carousel/robutek.png";
import splavmatysek from "../../assets/pictures/carousel/splavMatysek.jpg";
import vylet from "../../assets/pictures/carousel/vylet.jpg";
/* import beaKalendar from "../../assets/pictures/carousel";
import beaKalendar from "../../assets/pictures/carousel";
import beaKalendar from "../../assets/pictures/carousel";
import beaKalendar from "../../assets/pictures/carousel";
import beaKalendar from "../../assets/pictures/carousel"; */

export const ProjectsDatabase = [
  {
    id: 1,
    title: "Grafika",
    description: [
      "Grafická tvorba využívající průhlednosti a&nbsp;vrstev.",
      "Použité programy a nástroje:",
      "GIMP - rastrový grafický editor, který se&nbsp;používá se&nbsp;zejména pro&nbsp;retušování a&nbsp;úpravy obrázků, fotografií, kreslení rukou, převod mezi různými formáty obrázků, tvorbu webové grafiky a&nbsp;specializovanější práce.",
      "Photopea - software na&nbsp;úpravu a&nbsp;zpracování rastrových a&nbsp;vektorových obrázků od&nbsp;českého vývojáře Ivana Kuckira.",
      "Inkscape - nástroj na&nbsp;tvorbu a&nbsp;úpravu vektorové grafiky.",
      "Zoner Callisto - vektorový grafický editor.",
    ],
    preview: [
      {
        id: 1,
        addition: "chlapecký roční kalendář pro vklad vlastní fotografie",
        image: jirikKalendar,
      },
      {
        id: 2,
        addition: "dívčí roční kalendář pro vklad vlastní fotografie",
        image: beaKalendar,
      },
      {
        id: 3,
        addition: "chlapecký roční kalendář pro vklad vlastní fotografie",
        image: jirikKalendar,
      },
      {
        id: 3,
        addition: "měsíční kalendář pro vklad vlastní fotografie",
        image: splavmatysek,
      },
      {
        id: 4,
        addition: "vrstva pro tisk na magický hrnek měnící barvu povrchu",
        image: magickyhrnek,
      },
      {
        id: 5,
        addition: "nápaditá magnetka pomocí koláže",
        image: motylci,
      },
      {
        id: 6,
        addition: "pozadí na plochu počítače pomocí koláže",
        image: nato,
      },
      {
        id: 7,
        addition: "nápaditá magnetka pomocí koláže",
        image: dansptaky,
      },
      {
        id: 8,
        addition: "responzivní vektorový obrázek",
        image: robutek,
      },
    ],
  },
  {
    id: 2,
    title: "Tvorba digitální publikace",
    description: [
      "Použité programy a nástroje:",
      "Adobe InDesign - nástroj pro návrh a rozvržení stránek pro desktopové a digitální publikování.",
      "GIMP - rastrový grafický editor, který se používá se zejména pro retušování a úpravy obrázků, fotografií, kreslení rukou, převod mezi různými formáty obrázků, tvorbu webové grafiky a specializovanější práce.",
      "Inkscape - nástroj na tvorbu a úpravu vektorové grafiky.",
    ],
    //   preview: autoskolaSmer,
    image: [radix1, radix2, radix8, karmickaastrologie],
  },
  {
    id: 3,
    title: "Malby",
    description: [
      "Ruční velkometrážová malba na vnitřní stěnu místnosti bez použití projektoru pro základní nákres obrazu.",
      "Podklad: stěrková hmota / první vnitřní nátěr",
      "Použité materiály: bílá malířská základní barva a tónovací matné barvy pro vnitřní a vnější použití.",
    ],
    preview: [
      {
        id: 1,
        name: "Fénix",
        addition: "velikost obrazu: výška 170cm a šířka 139cm.",
        image: fenix,
      },
      {
        id: 2,
        name: "Drak z animovaného seriálu Bakugan",
        addition: "velikost obrazu: výška 195cm a šířka 280cm.",
        image: drak,
      },
      {
        id: 3,
        name: "Mechický robot z animovaného seriálu Bakugan",
        addition: "velikost obrazu: výška 180cm a šířka 127cm.",
        image: bakugan,
      },
      {
        id: 3,
        name: "Garfield a Rákosníček",
        addition: [
          "Garfield - velikost obrazu: výška 145cm a šířka 86cm.",
          "Rákosníček - velikost obrazu: výška 110cm a šířka 133cm.",
        ],
        image: garfieldarakosnicek,
      },
      {
        id: 4,
        name: "Loď - mozaika",
        addition: "velikost obrazu: výška 242cm a šířka 234cm.",
        image: lodka,
      },
    ],
  },
];
