import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FeatureEvent = () => {
  const [eventName, setEventName] = useState("");
  const [featurePlan, setFeaturePlan] = useState("");

  return (
    <div className="py-2">
      {/* Event Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Event Name
        </label>
        <div className="relative">
          <select
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="w-full px-3.5 py-2.5 border border-black rounded-md text-sm text-gray-700 bg-white appearance-none focus:outline-none focus:ring-1 focus:ring-red-400"
          >
            <option value="">Enter/Select Organizer Name</option>
            <option value="event1">Event 1</option>
            <option value="event2">Event 2</option>
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs">
            <IoIosArrowDown />
          </span>
        </div>
      </div>

      {/* Event Image */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Event Image
        </label>
        <input
          className="w-full px-3.5 py-2.5 border border-black rounded-md text-sm text-gray-400 bg-gray-50 cursor-not-allowed focus:outline-none"
          value="Auto Filled from Organizer profile data"
          readOnly
        />
      </div>

      {/* Organizer Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Organizer Name
        </label>
        <input
          className="w-full px-3.5 py-2.5 border border-black rounded-md text-sm text-gray-400 bg-gray-50 cursor-not-allowed focus:outline-none"
          value="Auto Filled from Organizer profile data"
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
          value="Auto Filled from Organizer profile data"
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
          value="Auto Filled from Organizer profile data"
          readOnly
        />
      </div>

      {/* Date Of Event */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Date Of Event
        </label>
        <input
          className="w-full px-3.5 py-2.5 border border-black rounded-md text-sm text-gray-400 bg-gray-50 cursor-not-allowed focus:outline-none"
          value="Auto Filled from player profile data"
          readOnly
        />
      </div>

      {/* Time Of Event */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Time Of Event Events
        </label>
        <input
          className="w-full px-3.5 py-2.5 border border-black rounded-md text-sm text-gray-400 bg-gray-50 cursor-not-allowed focus:outline-none"
          value="Auto Filled from player profile data"
          readOnly
        />
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

export default FeatureEvent;
