import Button from "../Button";

const QuoteCard = (props) => {
  const {
    img = "./src/Gurun.png",
    quote = "'Siapa yang menenggelamkan mereka, maka akan dilaknat!'",
    name = "Gin Arata",
    job = "Fullstack Dev",
    city = "Tokyo",
  } = props;
  return (
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 w-1/4">
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src={img}
        alt="Gambar"
        width="384"
        height="512"
      ></img>
      <div className="pt-6 text-center space-y-4">
        <blockquote>
          <p className="text-lg font-medium">{quote}</p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">{name}</div>
          <div className="text-slate-700 dark:text-slate-500">
            {job}, {city}
            <br />
            <Button color="sky" margin="mt-2">
              Detail
            </Button>
          </div>
        </figcaption>
      </div>
    </figure>
  );
};

export default QuoteCard;