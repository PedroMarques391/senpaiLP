'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Loader2, CheckCircle, XCircle, Copy } from 'lucide-react';
import { DialogDescription, DialogHeader, DialogTitle } from './dialog';
import { Button } from './button';
import { Input } from './input';
import { QRCode } from 'react-qrcode-logo';
import { IServices } from '@/src/types';
import { normalizeAmount } from '@/src/utils';



type PaymentStatus = 'GENERATING' | 'WAITING' | 'PAID' | 'ERROR';


interface PaymentFlowProps {
    service: IServices;
    onClose: () => void;
}

export function PaymentFlow({ service, onClose }: PaymentFlowProps) {
    const [status, setStatus] = useState<PaymentStatus>('GENERATING');
    const [paymentData, setPaymentData] = useState<any>(null);
    const [copied, setCopied] = useState(false);

    const amount = normalizeAmount(service.value)
    const hasGenerated = useRef(false);

    useEffect(() => {
        if (hasGenerated.current) return;
        hasGenerated.current = true;

        const generatePayment = async () => {
            try {
                const response = await fetch('/api/payment', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        amount,
                        description: service.url,
                        expiresIn: 3000,
                    }),
                });

                if (!response.ok) throw new Error('Falha ao gerar o QR Code');
                const responseJSON = await response.json();

                setPaymentData(responseJSON);
                setStatus('WAITING');
            } catch (error) {
                console.error(error);
                setStatus('ERROR');
            }
        };

        generatePayment();
    }, [amount, service.url]);

    // useEffect(() => {
    //     if (paymentData?.data.status === 'PENDING') {
    //         const intervalId = setInterval(async () => {
    //             try {
    //                 const response = await fetch('/api/check', {
    //                     method: 'POST',
    //                     headers: { 'Content-Type': 'application/json' },
    //                     body: JSON.stringify({
    //                         id: paymentData.data.id
    //                     }),
    //                 });
    //                 const result = await response.json();
    //                 console.log(result?.data.status)
    //                 if (result.status === 'PAID') {
    //                     setStatus('PAID');
    //                     clearInterval(intervalId);
    //                 }
    //             } catch (error) {
    //                 console.error("Falha ao verificar pagamento:", error);
    //             }
    //         }, 5000);

    //         return () => clearInterval(intervalId);
    //     }
    // }, [paymentData?.data]);

    const handleCopy = () => {
        if (!paymentData?.data.brCode) return;
        navigator.clipboard.writeText(paymentData.data.brCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (status === 'GENERATING') {
        return (
            <div className="flex flex-col items-center justify-center h-48">
                <Loader2 className="h-12 w-12 text-blue-500 animate-spin" />
                <DialogTitle className="mt-4">Gerando seu PIX...</DialogTitle>
                <DialogDescription className="mt-2">Aguarde um instante.</DialogDescription>
            </div>
        );
    }

    if (status === 'PAID') {
        return (
            <div className="flex flex-col items-center justify-center h-48">
                <CheckCircle className="h-12 w-12 text-green-500" />
                <DialogTitle className="mt-4">Pagamento Aprovado!</DialogTitle>
                <DialogDescription className="mt-2">Obrigado! Pode fechar esta janela.</DialogDescription>
                <Button onClick={onClose} className="mt-6">Concluir</Button>
            </div>
        );
    }

    if (status === 'ERROR') {
        return (
            <div className="flex flex-col items-center justify-center h-48">
                <XCircle className="h-12 w-12 text-red-500" />
                <DialogTitle className="mt-4">Ocorreu um Erro</DialogTitle>
                <DialogDescription className="mt-2">Não foi possível gerar seu pagamento.</DialogDescription>
                <Button variant="outline" onClick={onClose} className="mt-4">Tente Novamente</Button>
            </div>
        );
    }


    return (
        <>
            <DialogHeader>
                <DialogTitle>Pague com PIX para continuar</DialogTitle>
                <DialogDescription>
                    Escaneie o QR Code com o app do seu banco.
                </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col items-center gap-4 py-4">
                <div className="bg-white p-4 rounded-lg border border-[#ff80ab]">
                    <QRCode
                        value={paymentData?.data.brCode}
                        size={240}
                        fgColor="#ff80ab"
                        bgColor="#fff0f6"
                        eyeColor={[
                            { outer: '#ff4081', inner: '#ec407a' },
                            { outer: '#ff4081', inner: '#ec407a' },
                            { outer: '#ff4081', inner: '#ec407a' }
                        ]}
                        qrStyle="dots"
                        logoImage="/images/senpai/senpai.webp"
                        logoWidth={60}
                        logoHeight={60}
                        logoOpacity={1}
                        removeQrCodeBehindLogo={true}
                        eyeRadius={[
                            { outer: [10, 10, 0, 10], inner: [0, 5, 5, 5] },
                            { outer: [10, 10, 10, 0], inner: [5, 0, 5, 5] },
                            { outer: [0, 10, 10, 10], inner: [5, 5, 0, 5] },
                        ]}
                    />
                </div>
                <div className="w-full relative">
                    <Input readOnly value={paymentData?.data.id} className="pr-12" placeholder="PIX Copia e Cola" />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleCopy}
                        className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                    >
                        {copied ? <CheckCircle className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
                    </Button>
                </div>
            </div>
        </>
    );
}