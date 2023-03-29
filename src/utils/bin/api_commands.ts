// // List of commands that require API calls

import { getProjects } from '../api';
import { getQuote } from '../api';
import { getReadme } from '../api';
import { getWeather } from '../api';

export const projects = async (args: string[]): Promise<string> => {
  return `
        VRC Spin Up - <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/flooof/VRC-SPIN-UP" target="_blank">https://github.com/flooof/VRC-SPIN-UP</a>
        QMK Macro Pad - <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/flooof/qmk_firmware" target="_blank">https://github.com/flooof/qmk_firmware</a>
        Karibiner Hotkeys - <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/flooof/karibiner-config" target="_blank">https://github.com/flooof/karibiner-config</a>
        LiveTerm Website - <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/flooof/LiveTerm" target="_blank">https://github.com/flooof/LiveTerm</a>
  `;
};

export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

export const readme = async (args: string[]): Promise<string> => {
  const readme = await getReadme();
  return `Opening GitHub README...\n
  ${readme}`;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return weather;
};
