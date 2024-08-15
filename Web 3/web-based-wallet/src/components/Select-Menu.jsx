"use client";

import { useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import PropTypes from "prop-types";

const people = [
  {
    id: 501,
    name: "Solana",
    avatar: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=032",
  },
  {
    id: 60,
    name: "Ethereum",
    avatar:
      "https://cryptologos.cc/logos/versions/ethereum-eth-logo-colored.svg?v=032",
  },
];

export default function SelectMenu({ onSelectChange }) {
  const [selected, setSelected] = useState(people[0]);
  const handleChange = (blockChain) => {
    setSelected(blockChain);
    onSelectChange(blockChain.id);
  };
  return (
    <Listbox value={selected} onChange={handleChange}>
      <Label className="text-2x1 font-medium leading-6 text-indigo-600 flex justify-center mb-3">
        Choose Blockchain
      </Label>
      <div className="w-screen flex justify-center">
        <ListboxButton className="w-40 relative cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 mb-10">
          <span className="flex items-center">
            <img
              alt=""
              src={selected.avatar}
              className="h-5 w-5 flex-shrink-0 rounded-full"
            />
            <span className="ml-3 block truncate">{selected.name}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon
              aria-hidden="true"
              className="h-5 w-5 text-gray-400"
            />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="w-40 absolute z-10 mt-10 max-h-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {people.map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <div className="flex items-center">
                <img alt="" src={person.avatar} className="h-5" />
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {person.name}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
SelectMenu.propTypes = {
  onSelectChange:PropTypes.func.isRequired,
};
