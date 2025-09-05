"use client";
import React from "react";
import { NavItem } from "./NavItem";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { SelectLang } from "../shared/SelectLang";

export interface IMenuProps {
    handleHref: (href: string) => string
}

const MenuDesktop = ({ handleHref }: IMenuProps): React.JSX.Element => {
    const t = useTranslations("header");

    return (
        <ul className="hidden lg:flex justify-center items-center gap-4 xl:gap-6">
            <NavItem href={handleHref("home")} >{t("home")}</NavItem>
            <NavItem href={handleHref("func")} >{t("features")}</NavItem>
            <NavItem href={handleHref("plans")}>{t("subscriptions")}</NavItem>
            <NavItem href='/about' >{t("aboutUs")}</NavItem>
            <NavItem href='/partners' >{t("beAPartner")}</NavItem>
            <li>
                <Link
                href="https://wa.me/555497153068?text=Ol%C3%A1%20senpai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link que leva para o número do bot."
                className="p-2 bg-gradient-to-r text-content-secondary from-[#fa8aa4] via-[#f097ac] to-[#f2b2c1] rounded-lg font-semibold transition-all duration-300 white hover:brightness-110 hover:scale-105 text-center inline-flex w-fit"
            >
                <p className='text-xs lg:text-base'>{t("chatWithSenpai")}</p>
            </Link>
            </li>
            <SelectLang />
        </ul>
    );
};

export default MenuDesktop;