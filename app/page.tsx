import {Button} from "@/app/components/ui/button/button";
import Link from "next/link";

export default function Home () {
    return (
        <Link href={"pages/auth-page"}>
            <Button type={"login"}>Auth</Button>
        </Link>
    );
};