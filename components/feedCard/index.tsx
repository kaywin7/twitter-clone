import React from "react";
import Image from "next/image";
import { FiUpload } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRetweet } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/Bi";

const FeedCard: React.FC = () => {
    return <div className="border border-gray-600 p-4 hover:bg-slate-700 transition-all cursor-pointer">
        <div className="grid grid-cols-12 ">
            <div className="col-span-1">
                <Image src={"https://avatars.githubusercontent.com/u/65694645?v=4"} alt="User image" height={50} width={50} className="rounded-full" />
            </div>
            <div className="col-span-11">
                <div className="pl-1">Kevin Francis</div>
                <p className="p-2">The sign of a great player. Converts great form into big scores. Kohli just understands situations. And owns them enough to give himself a birthday present</p>
                <div className="flex justify-between items-center pr-4">
                    <div><BiMessageRounded /></div>
                    <div> <FaRetweet /></div>
                    <div><AiOutlineHeart /></div>
                    <div><FiUpload /></div>
                </div>
            </div>
        </div>
    </div>
}
export default FeedCard;