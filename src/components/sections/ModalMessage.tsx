import React from "react";
import { AnimatedCheckCircle, AnimatedXCircle } from "../motion/AnimatedCircle";
import { Button } from "../ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { IModalMessage } from "@/src/types";

const ModalMessage = ({ statusIcon, text, textButton, setEmailSend }: IModalMessage): React.JSX.Element => {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center">
            {statusIcon === "x" ? <AnimatedXCircle /> : <AnimatedCheckCircle />}
            <p className="text-sm text-zinc-500 max-w-xs py-2">
                {text}
            </p>
            <div className="w-full mt-4 flex justify-end items-center gap-2">
                <Button onClick={() => setEmailSend((prev) => !prev)} variant="default">
                    {textButton}
                </Button>
                <DialogClose asChild>
                    <Button variant="destructive">Sair</Button>
                </DialogClose>
            </div>
        </div>
    );
};

export default ModalMessage;