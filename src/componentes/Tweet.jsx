import { useAuth } from "../hooks/useAuth";
import Usuario from "../assets/perfil.png";
import Planeta from "../assets/mundo.png";
import Imagenes from "../assets/imagen.png";
import Feliz from "../assets/feliz.png";
import Chat from "../assets/chat.png";
import Grafica from "../assets/grafica.png";
import Like from "../assets/like.png";
import Retweet from "../assets/retweet.png";
import {
  saveTweets,
  getOnTweets,
  getTweetId,
  auth,
  savelikeTweet,
  getDislikeTweet,
} from "../firebase/Myapp";
import { useState, useEffect, useRef } from "react";
import Toastify from "toastify-js";

export const Tweet = () => {
  const [itsTweet, setTweet] = useState("");
  const [showTweet, setShowTweet] = useState([]);

  //  FUNCION PARA GUARDAR TWEET EN LA BASE DE DATOS
  const handleSubmitTweet = (event) => {
    event.preventDefault();
    saveTweets(itsTweet, 0, []);
    setTweet("");

    Toastify({
      text: "Tweet Publicado",
      duration: 2000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
  };

  useEffect(() => {
    getOnTweets((evento) => {
      setShowTweet(
        evento.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      );
    });
    return () => {
      getOnTweets();
    };
  }, []);

  // EL ESTADO ESTA TOMANDO EL VALOR ACTUAL
  const changeTweet = (event) => {
    setTweet(event.target.value);
  };

  const validation = useAuth();
  validation.verification();

  return (
    <>
      <form onSubmit={handleSubmitTweet}>
        <div className="w-5/5 p-4 basis-3/4 shadow-md rounded-md h-full">
          <div className="flex">
            <span className="text-lg font-semibold text-white">Home</span>
          </div>
          <div className="flex pt-2 gap-1">
            <div>
              <img src={Usuario} className="w-14" />
            </div>
            <input
              type="text"
              className=" bg-black outline-none text-gray-400 placeholder:text-xl focus:outline-none placeholder:text-gray-400 w-full"
              placeholder="¿Qué está pasando?!"
              value={itsTweet}
              onChange={changeTweet}
            />
          </div>
          <div className="pt-2"></div>
          <div className="grid pl-14 divide-y">
            <div className="flex space-x-2">
              <img src={Planeta} className="w-6 h-6" />
              <span className="text-white">Everyone can reply</span>
            </div>
            <div className="flex pt-3 justify-between mt-2">
              <div className="flex space-x-2 gap-3 ">
                <img
                  src={Imagenes}
                  className="w-6 h-6 cursor-pointer text-blue-500"
                />
                <img src={Feliz} className="w-6 h-6 cursor-pointer" />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="rounded-full bg-blue-500 text-white h-10 w-20 hover:bg-blue-700"
                  type="submit"
                >
                  Tweet
                </button>
              </div>
            </div>
          </div>

          <div className="pt-2"></div>
          <div className="border"></div>
          <div className="flex items-center justify-center"></div>
          <div className="border"></div>
        </div>
      </form>

      {showTweet.map((twitter) => {
        return (
          <>
            <div className="">
              <div className="rounded border mt-4 basis-3/4 h-full">
                <div className="flex pt-2 space-x-2">
                  <div>
                    <img src={Usuario} className="w-14" />
                  </div>
                  <span className="font-semibold text-white">Usuario</span>
                </div>
                <div className="pl-14 grid" key={twitter.id}>
                  <span className="text-white">Tweet:</span>
                  <div className="rounded-md border p-4">
                    <div className="flex space-x-2"></div>
                    <p className="text-white">{twitter.data.NuevoTweet}</p>
                  </div>
                </div>
                <div className="flex justify-around mt-3">
                  <button>
                    <img src={Chat} className="w-5" />
                  </button>
                  <button>
                    <img src={Retweet} className="w-5" />
                  </button>
                  <button className="flex text-white justify-center text-base gap-2">
                    {twitter.data.likes}
                    <img
                      src={Like}
                      className="w-5 text-white"
                      onClick={async (evento) => {
                        const id = evento.target.dataset.id;
                        const likeUser = auth.currentUser.uid;
                        const documento = await getTweetId(id);
                        const userData = documento.data();
                        if (!userData.users.includes(likeUser)) {
                          const currentLike = userData.likes + 1;
                          savelikeTweet(id, currentLike, likeUser);
                        } else {
                          const discurrentLike = userData.likes - 1;
                          getDislikeTweet(id, discurrentLike, likeUser);
                        }
                      }}
                      data-id={twitter.id}
                    />
                  </button>
                  <button>
                    <img src={Grafica} className="w-5" />
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
