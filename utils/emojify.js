export const getEmojiName = (emoji) =>
  emoji
    .replace(/\[/g, '')
    .replace(/\]/g, '')
    .replace(/:/g, '');

export const getEmojiUrl = (emoji) => {
  const noChars = getEmojiName(emoji);
  return `/img/smiles/${noChars}.png`;
};

export default (text, size = 40) => {
  const emojiRegex = /\[:.*?:]/g;
  return text.replace(emojiRegex, (emoji) => {
    const url = getEmojiUrl(emoji);
    const alt = `alt="${getEmojiName(emoji)}"`;
    const src = `src="${url}"`;
    const sizes = `width="${size}" height="${size}"`;
    return `<img ${sizes} ${alt} ${src}>`;
  });
};
