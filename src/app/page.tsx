"use client";
import Image from "next/image";
import nameClimatic from "../../public/logos/climaticPrimary.svg";
import Controlador from "./Controlador";

export default function Home() {
  const controladorPrincipal = Controlador();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative">
      {controladorPrincipal.loading ? (
        <div
          className={`mt-10 animate-spin rounded-full w-8 h-8 border-t-4 border-l-primary border-t-primary/80 border-b-white border-solid`}
        ></div>
      ) : (
        <>
          <div className="md:hidden absolute top-0 w-full flex flex-col justify-center items-center gap-y-8">
            <div className="h-1.5 bg-primary w-full"></div>
            <Image src={nameClimatic} alt=""></Image>
          </div>
          <div className="w-11/12 md:w-1/3 gap-y-7 flex flex-col">
            <Image src={nameClimatic} alt="" className="max-md:hidden"></Image>
            <div className="md:ring-1 md:ring-primary rounded-sm md:pt-5 md:px-4">
              <p className="text-foregroundLight text-xs uppercase">
                {controladorPrincipal.data.weather[0].description}
              </p>
              <div className="flex w-full gap-x-1 mt-2">
                <p className="text-foreground font-bold text-4xl">
                  {controladorPrincipal.data.main.temp}
                </p>
                <p className="text-foregroundLight text-2xl">°</p>
              </div>
              <div className="flex w-full justify-between max-md:border-b-2 border-t-2 mt-4 py-4 items-center">
                <p className="text-foregroundLight font-light text-xs">
                  Min.{" "}
                  <span className="text-foreground font-semibold">
                    {controladorPrincipal.data.main.temp_min}
                  </span>
                </p>
                <p className="text-foregroundLight font-light text-xs">
                  Max.{" "}
                  <span className="text-foreground font-semibold">
                    {controladorPrincipal.data.main.temp_max}
                  </span>
                </p>
              </div>
            </div>
            <div className="md:mt-5 flex flex-col">
              <div className="w-full flex max-md:flex-col md:justify-between gap-x-3 md:items-center">
                <p className="text-foreground text-xs font-semibold">
                  Pronóstico de Monterrey, Nuevo Leon
                </p>
                <p className="text-foregroundLight text-xs">Próximas 9 horas</p>
              </div>
              <div className="flex w-full justify-between ring-1 ring-foregroundLight rounded-full px-3 py-1 mt-3 items-center">
                <p className="text-foregroundLight font-light text-xs">
                  Min.{" "}
                  <span className="text-foreground font-semibold">
                    {controladorPrincipal.data.main.temp_min}
                  </span>
                </p>
                <p className="text-foregroundLight text-xs uppercase">
                  {controladorPrincipal.data.weather[0].description}
                </p>
                <p className="text-foregroundLight font-light text-xs">
                  Max.{" "}
                  <span className="text-foreground font-semibold">
                    {controladorPrincipal.data.main.temp_max}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      <footer className="absolute w-full bottom-4 text-center">
        <p className="text-xs text-foregroundLight">
          © 2025 Climatic, Inc. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}
