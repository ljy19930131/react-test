import React, { useCallback, useEffect, useState } from "react";
import "./index.css";

interface IPlayerBase {
  width: number;
  height: number;
  px: number;
  py: number;
  speed: number;
  dr: "top" | "right" | "bottom" | "left";
}

interface IPlayer {
  width: number;
  height: number;
  px: number;
  py: number;
  speed: number;
  dr: "top" | "right" | "bottom" | "left";
}

function Hero(this: any) {
  this.width = 100;
  this.height = 100;
  this.px = 100;
  this.py = 100;
  this.speed = 10;
  this.dr = "right";
}

function Moster(this: any) {
  this.width = 200;
  this.height = 200;
  this.px = 500;
  this.py = 500;
  this.speed = 30;
  this.dr = "left";
}

function Play(this: any, type: string) {
  if (type === "hero") {
    Hero.call(this);
  }
  if (type === "moster") {
    Moster.call(this);
  }
}

function Person() {
  const [globData, setGlobData] = useState({ sw: 0, sh: 0 });
  const [playerList, setPlayerList] = useState<IPlayer[]>([]);


  const create = () => {
    // @ts-ignore
    const player1: any = new Play("hero");
    const list = [...playerList];
    list.push(player1);
    // setPlayerList(list)
  }

  useEffect(() => {
    setGlobData({
      sw: window.innerWidth,
      sh: window.innerHeight,
    });
    window.onresize = () => {
      const { innerWidth, innerHeight } = window;
      setGlobData({
        sw: innerWidth,
        sh: innerHeight,
      });
    };
    return () => {};
  }, []);

  return <div className="Person">Person</div>;
}

export default React.memo(Person);
