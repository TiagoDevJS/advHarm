export type Categories = {
  id: string;
  name: string;
  Slug: string;
  img: string;
  price: {
    name: string;
    plane: string;
    price: number;
    qtd: number;
    total: number;
    descript: string;
  }[];
};
export type Hotmart = {
  id: number;
  name: string;
  price: number;
  img: string;
  Slug?: String;
  descript: string;
};
export type Admin = {
  id: number;
  name: String;
  url: string;
};
export type Links = {
  name: string;
  path: string;
};

export const hotmart = [
  {
    id: 1,
    Slug: "denstistas",
    name: "Blindagem Jurídica nas Clínicas de Harmonização",
    descript:
      "O curso visa proporcionar conhecimento sobre aspectos gerais das atividades em observâncias aos ditames legais...",
    price: 120,
    img: "/CS.jpeg",
  },


  
  {
    id: 2,
    name: "Anamnese para Harmonização ",
    price: 148,
    descript:
      "Anamnese editável organizada por medicamentos, doenças, hábitos e gênero, incluindo questões de rastreio...",
    img: "/amen.jpeg",
  },
  {
    id: 3,
    name: "Consulta on-line com Advogado(a)",
    price: 480,
    descript:
      "Consultas on-line de orientação sobre questões de responsabilidade civil, direito da saúde direito empresarial...",
    img: "/cs.svg",
  },
];
export const populares = [
  {
    id: 1,
    Slug: "dentistas",
    name: "Nome do produto",
    price: 2159,
    img: "/bM.jpg",
  },
  {
    id: 2,
    Slug: "biomedicos",
    name: "Nome do produto",
    price: 1590,
    img: "/hO.jpg",
  },
  {
    id: 3,
    Slug: "harmonizacao",
    name: "Nome do produto",
    price: 1639,
    img: "/hO.jpg",
  },
];
export const bestSellers = [
  {
    id: "1",
    name: "Dentistas",
    Slug: "dentistas",
    img: "/hO.jpg",
    descript:
      "Descriçao: Os processos contra clínicas e profissionais da harmonização estão aumentando cada vez mais. A falta da documentação completa tem levado ótimos profissionais a grandes condenações. Este kit de proteção jurídica foi pensado exclusivamente para biomédicos que estão começando a atuar na área da harmonização. Inclui os três principais procedimentos. Analisado palavra por palavra, estes documentos tem a capacidade de blindar a sua clínica juridicamente. ",
    price: [
      {
        name: "KIT AVANÇADO PREMIUM DE PROTEÇÃO JURÍDICA PARA DENTISTAS NA HARMONIZAÇÃO",
        plane: "Premium",
        price: 1250,
        qtd: 1,
        pdf: "https://onedrive.live.com/download?resid=A487767885870F49%21198231&authkey=!AEmrzD83LwtJWqI&em=2",
        total: 32,
      },
    ],
  },
  {
    id: "2",
    name: "Biomédicos",
    img: "/bM.jpg",
    Slug: "biomedicos",
    descript:
      "Os processos contra clínicas e profissionais da harmonização estão aumentando cada vez mais. A falta da documentação completa tem levado ótimos profissionais a grandes condenações. Este kit de proteção jurídica foi pensado exclusivamente para biomédicos que estão começando a atuar na área da harmonização. Inclui os três principais procedimentos. Analisado palavra por palavra, estes documentos tem a capacidade de blindar a sua clínica juridicamente. ",
    price: [
      {
        name: "KIT AVANÇADO PREMIUM DE PROTEÇÃO JURÍDICA PARA BIOMÉDICOS NA HARMONIZAÇÃO",
        plane: "Premium",
        price: 1250,
        qtd: 1,
        total: 43,
      },
    ],
  },
  {
    id: "3",
    name: "Clinicas de Harmonização",
    Slug: "harmonizacao",
    img: "/hO.jpg",
    price: [
      {
        name: "KIT AVANÇADO PREMIUM DE PROTEÇÃO JURÍDICA PARA CLÍNICAS DE HARMONIZAÇÃO",
        plane: "Premium",
        price: 2400,
        qtd: 1,
        pdf: "https://mega.nz/folder/o2kARKCT#6RCXyudDogGB_0KpPC9sFQ",
        total: 52,
      },
    ],
  },
];



export const courses = [
  {
    id: 1,
    Slug: "denstistas",
    name: "A responsabilidade civil do Dentista em Procedimentos Estéticos",
    descript:
      "Responsabilidade civil do DENTISTA em Atividade meio e de resultado/Responsabilidade subjetiva e objetiva / Estudo de casos ocorridos com dentistas/ Código de defesa do Consumidor e inversão do ônus da prova. Juizado comum e especial/Provas e Revelia/ Perícia e prontuário médico - Bioética, Compliance e meios de prova.",
    price: 120,
    img: "/dent.png",
  },
  {
    id: 2,
    Slug: "biomedicos",
    name: "A responsabilidade civil do Biomédico em Procedimentos Estéticos.",
    descript:
      "Responsabilidade civil do Biomédico em Atividade meio e de resultado/Responsabilidade subjetiva e objetiva / Estudo de casos ocorridos com BIOMÉDICOS/ Código de defesa do Consumidor e inversão do ônus da prova. Juizado comum e especial/Provas e Revelia/ Perícia e prontuário médico - Bioética, Compliance e meios de prova.",
    price: 120,
    img: "/bio.png",
  },

  {
    id: 3,
    Slug: "harmonizacao",
    name: "A responsabilidade civil do Profissional da Harmonização em Procedimentos Estéticos",
    descript:
      "Responsabilidade civil do PROFISSIONAL DE HARMONIZAÇÃO em Atividade meio e de resultado/Responsabilidade subjetiva e objetiva / Estudo de casos ocorridos com PROFISSIONAIS DE HARMONIZAÇÃO/ Código de defesa do Consumidor e inversão do ônus da prova. Juizado comum e especial/Provas e Revelia/ Perícia e prontuário médico - Bioética, Compliance e meios de prova.",
    price: 120,
    img: "/harm.png",
  },
  {
    id: 4,
    name: "A responsabilidade civil do Profissional da Harmonização em Procedimentos Estéticos",
    price: 199,
    descript:
      "Anamnese editável desenvolvida especialmente para avaliação de pacientes na área de harmonização, segmentada e organizada para avaliação de uso de medicamentos, histórico de doenças, hábitos, rastreio sócio emocional, avaliação Clínica dermatológica do paciente e espaço para revisão no retorno.  Bônus: Vídeo explicativo sobre a importância e modo da anamnese.",
    img: "/am.png",
  },
  {
    id: 5,
    Slug: "biomedicos",
    name: "A responsabilidade civil do Biomédico em Procedimentos Estéticos.",
    descript:
      "Responsabilidade civil do Biomédico em Atividade meio e de resultado/Responsabilidade subjetiva e objetiva / Estudo de casos ocorridos com BIOMÉDICOS/ Código de defesa do Consumidor e inversão do ônus da prova. Juizado comum e especial/Provas e Revelia/ Perícia e prontuário médico - Bioética, Compliance e meios de prova.",
    price: 120,
    img: "/bio.png",
  },

  {
    id: 6,
    Slug: "harmonizacao",
    name: "A responsabilidade civil do Profissional da Harmonização em Procedimentos Estéticos",
    descript:
      "Responsabilidade civil do PROFISSIONAL DE HARMONIZAÇÃO em Atividade meio e de resultado/Responsabilidade subjetiva e objetiva / Estudo de casos ocorridos com PROFISSIONAIS DE HARMONIZAÇÃO/ Código de defesa do Consumidor e inversão do ônus da prova. Juizado comum e especial/Provas e Revelia/ Perícia e prontuário médico - Bioética, Compliance e meios de prova.",
    price: 120,
    img: "/harm.png",
  },
  {
    id: 7,
    Slug: "denstistas",
    name: "A responsabilidade civil do Dentista em Procedimentos Estéticos",
    descript:
      "Responsabilidade civil do DENTISTA em Atividade meio e de resultado/Responsabilidade subjetiva e objetiva / Estudo de casos ocorridos com dentistas/ Código de defesa do Consumidor e inversão do ônus da prova. Juizado comum e especial/Provas e Revelia/ Perícia e prontuário médico - Bioética, Compliance e meios de prova.",
    price: 120,
    img: "/dent.png",
  },
  {
    id: 8,
    Slug: "biomedicos",
    name: "Consultas on-line de orientação sobre questões de responsabilidade civil...",
    price: 480,
    descript:
      "Consultas on-line de orientação sobre questões de responsabilidade civil,saúde e empresarial",
    img: "/on.png",
  },
];
export const links = [
  {
    name: "Home",
    path: "/",
    icon:"/home.png"
  
  },
  { name: "Documentação", path: "/categories",icon:"/book.png" },
  { name: "Cursos", path: "/courses", icon:"/c.png" },
  { name: "Consultas", path: "/consultancy" ,icon:"/call.png"},
  { name: "Contato", path: "/contact" ,icon:"/mail.png"},
];
