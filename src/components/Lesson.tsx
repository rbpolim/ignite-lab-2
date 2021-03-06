import { CheckCircle, Lock } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

type LessonProps = {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const { slug: slugParams } = useParams()

  const isLessonAvailable = isPast(availableAt);
  const availableAtFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  const isActiveLesson = slugParams === slug;

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">
        {availableAtFormatted}
      </span>

      <div className={`p-4 mt-2 border border-gray-500 rounded group-hover:border-green-500 ${isActiveLesson && 'bg-green-500'}`}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="flex items-center gap-2 text-sm font-medium text-blue-500">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm font-medium text-orange-500">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300">
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong className="block mt-4 text-gray-200">
          {title}
        </strong>
      </div>
    </Link>
  )
}