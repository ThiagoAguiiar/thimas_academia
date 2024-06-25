import { CardPlanos } from "./content/card-planos";
import { Title } from "./content/title";

export function Planos() {
  return (
    <div
      className="w-[80%] relative mx-auto p-7 rounded-3xl bg-[#f5f5f5] max-[540px]:bg-white space-y-10"
      id="planos"
    >
      <Title title="Confira Nossos Planos" className="text-center" />

      <div className="cards flex justify-center flex-wrap items-start gap-5 ">
        <CardPlanos
          badge="Amadores"
          title="Madeira"
          color="#612121"
          data={[
            {
              avaiable: true,
              text: "Acesso a todos os equipamentos",
            },
            {
              avaiable: false,
              text: "Aulas de natação",
            },
            {
              avaiable: false,
              text: "Aulas de natação",
            },
          ]}
          price={{
            month: "R$ 50,00",
            semester: "R$ 300,00",
          }}
        />

        <CardPlanos
          badge="Profissionais"
          title="Diamante"
          color="#00b2ff"
          data={[
            {
              avaiable: true,
              text: "Acesso a todos os equipamentos",
            },
            {
              avaiable: true,
              text: "Acesso a todos os equipamentos",
            },
            {
              avaiable: true,
              text: "Acesso a todos os equipamentos",
            },
            {
              avaiable: true,
              text: "Acesso a todos os equipamentos",
            },
            {
              avaiable: true,
              text: "Acesso a todos os equipamentos",
            },
            {
              avaiable: true,
              text: "Acesso a todos os equipamentos",
            },
            {
              avaiable: true,
              text: "Acesso a todos os equipamentos",
            },
            {
              avaiable: true,
              text: "Acesso a todos os equipamentos",
            },
            {
              avaiable: false,
              text: "Aulas de natação",
            },
          ]}
          price={{
            month: "R$ 50,00",
            semester: "R$ 300,00",
          }}
        />

        <CardPlanos
          badge="Mini body builder"
          title="Ouro"
          color="#ffa800"
          data={[
            {
              avaiable: true,
              text: "Acesso a todos os equipamentos",
            },
            {
              avaiable: true,
              text: "Acesso a todos os equipamentos",
            },
            {
              avaiable: false,
              text: "Aulas de natação",
            },
          ]}
          price={{
            month: "R$ 50,00",
            semester: "R$ 300,00",
          }}
        />
      </div>
    </div>
  );
}
