import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FeaturePlayer = () => {
  const [playerName, setPlayerName] = useState("");
  const [featurePlan, setFeaturePlan] = useState("");
  const [bannerFile, setBannerFile] = useState(null);

  return (
    <div className="py-2">
      {/* Player Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Player Name
        </label>
        <div className="relative">
          <select
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="w-full px-3.5 py-2.5 border border-black rounded-md text-sm text-gray-700 bg-white appearance-none focus:outline-none focus:ring-1 focus:ring-red-400"
          >
            <option value="">Enter/Select Player Name</option>
            <option value="player1">Player 1</option>
            <option value="player2">Player 2</option>
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs">
            <IoIosArrowDown />
          </span>
        </div>
      </div>

      {/* Player Image */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Player Image
        </label>
        <input
          className="w-full px-3.5 py-2.5 border border-black rounded-md text-sm text-gray-400 bg-gray-50 cursor-not-allowed focus:outline-none"
          value="Auto Filled from player profile data"
          readOnly
        />
      </div>

      {/* Rating And Reviews */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Rating And Reviews
        </label>
        <input
          className="w-full px-3.5 py-2.5 border border-black rounded-md text-sm text-gray-400 bg-gray-50 cursor-not-allowed focus:outline-none"
          value="Auto Filled from player profile data"
          readOnly
        />
      </div>

      {/* Location */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Location
        </label>
        <input
          className="w-full px-3.5 py-2.5 border border-black rounded-md text-sm text-gray-400 bg-gray-50 cursor-not-allowed focus:outline-none"
          value="Auto Filled from player profile data"
          readOnly
        />
      </div>

      {/* Sport Preference */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Sport Preference
        </label>
        <input
          className="w-full px-3.5 py-2.5 border border-black rounded-md text-sm text-gray-400 bg-gray-50 cursor-not-allowed focus:outline-none"
          value="Auto Filled from player profile data"
          readOnly
        />
      </div>

      {/* Upload Image */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Upload Image
        </label>
        <div className="flex border border-black rounded-md overflow-hidden">
          <input
            className="flex-1 px-3.5 py-2.5 text-sm text-gray-500 bg-white focus:outline-none"
            placeholder="Upload banner here"
            value={bannerFile ? bannerFile.name : ""}
            readOnly
          />
          <label className="px-4 py-2.5 bg-red-500 text-white text-sm font-medium cursor-pointer flex items-center hover:bg-red-600 transition-colors whitespace-nowrap">
            Upload Image
            <input
              type="file"
              className="hidden"
              onChange={(e) => setBannerFile(e.target.files[0])}
            />
          </label>
        </div>
      </div>

      {/* Feature Plan */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Feature Plan
        </label>
        <div className="relative">
          <select
            value={featurePlan}
            onChange={(e) => setFeaturePlan(e.target.value)}
            className="w-full px-3.5 py-2.5 border border-black rounded-md text-sm text-gray-700 bg-white appearance-none focus:outline-none focus:ring-1 focus:ring-red-400"
          >
            <option value="">Select Feature Plan</option>
            <option value="basic">Basic</option>
            <option value="pro">Pro</option>
            <option value="premium">Premium</option>
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs">
            <IoIosArrowDown />
          </span>
        </div>
      </div>

      {/* Activate Button */}
      <button className="w-full py-3.5 mt-2 bg-red-500 hover:bg-red-600 text-white text-sm font-bold tracking-widest rounded-md uppercase transition-colors">
        ACTIVATE FEATURE
      </button>
    </div>
  );
};

export default FeaturePlayer;
