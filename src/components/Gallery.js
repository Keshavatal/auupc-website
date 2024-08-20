import React, { useState, useEffect, useCallback } from 'react';
import { Columns, Calendar, X } from 'lucide-react';

const events = [
  { id: 1, name: "Fest", date: "2023-04-15" },
  { id: 2, name: "Flashmob", date: "2023-06-22" },
  { id: 3, name: "Orientation", date: "2023-08-10" },
  { id: 4, name: "Sports", date: "2023-10-05" },
  { id: 6, name: "AUUPC", date: "2024-03-08" },
];

const photos = [
  // for Aurora fest or event id 1
  { id: 1, src: "https://i.ibb.co/jkVkSR5/IMG-0331.webp", alt: "Aurora", type: "landscape", eventId: 1 },
  { id: 2, src: "https://i.ibb.co/wyzp4Wd/IMG-0369.webp", alt: "Aurora", type: "landscape", eventId: 1 },
  { id: 3, src: "https://i.ibb.co/BtPY1m0/IMG-0057.webp", alt: "Aurora photo", type: "landscape", eventId: 1 },
  { id: 4, src: "https://i.ibb.co/7yLs6TH/6-E0-B3-DF9-5-CD7-47-DF-B389-4-D42-CE2-ABE27.webp", alt: "Aurora", type: "landscape", eventId: 1 },
  { id: 5, src: "https://i.ibb.co/Q9PwxVX/IMG-0231.webp", alt: "Aurora", type: "landscape", eventId: 1 },
  { id: 6, src: "https://i.ibb.co/Hz3WnYg/IMG-0239.webp", alt: "Aurora", type: "landscape", eventId: 1 },
  { id: 7, src: "https://i.ibb.co/Fm5ZRDj/IMG-0184.webp", alt: "Aurora", type: "landscape", eventId: 1 },
  { id: 8, src: "https://i.ibb.co/5kZ8jMm/IMG-0185.webp", alt: "Aurora", type: "landscape", eventId: 1 },
  { id: 9, src: "https://i.ibb.co/FX3byRm/IMG-0354.webp", alt: "Aurora", type: "landscape", eventId: 1 },
  { id: 10, src: "https://i.ibb.co/vjdxdJP/IMG-2677.webp", alt: "Aurora", type: "landscape", eventId: 1 },
  { id: 11, src: "https://i.ibb.co/rHr33gc/IMG-0358.webp", alt: "Aurora", type: "landscape", eventId: 1 },
  { id: 12, src: "https://i.ibb.co/JQmSjGt/IMG-0212.webp", alt: "Aurora", type: "landscape", eventId: 1 },
  { id: 13, src: "https://i.ibb.co/QMb2ZVg/IMG-0335.webp", alt: "Aurora", type: "landscape", eventId: 1 },
  { id: 14, src: "https://i.ibb.co/ryw5Rhq/IMG-3325.webp", alt: "Aurora", type: "landscape", eventId: 1 },
  { id: 15, src: "https://i.ibb.co/ryw5Rhq/IMG-3325.webp", alt: "Aurora", type: "landscape", eventId: 1 },

  // for Aurora fest or event id 1
  { id: 61, src: "https://i.ibb.co/rkmbJh5/IMG-1384.jpg", alt: "International", type: "all", eventId: 1 },
  { id: 62, src: "https://i.ibb.co/DgqFfmM/IMG-1794.webp", alt: "International", type: "all", eventId: 1 },
  { id: 63, src: "https://i.ibb.co/Wty0k30/IMG-1713.webp", alt: "International", type: "all", eventId: 1 },
  { id: 64, src: "https://i.ibb.co/GJb4RM9/IMG-1820.webp", alt: "International", type: "all", eventId: 1 },
  { id: 65, src: "https://i.ibb.co/tzd7TCF/IMG-1744.webp", alt: "International", type: "all", eventId: 1 },
  { id: 66, src: "https://i.ibb.co/B2Z4Kds/IMG-1577.webp", alt: "International", type: "all", eventId: 1 },
  { id: 67, src: "https://i.ibb.co/gPwj3R8/IMG-1660.webp", alt: "International", type: "all", eventId: 1 },
  { id: 68, src: "https://i.ibb.co/gj6R3Bz/IMG-1702.webp", alt: "International", type: "all", eventId: 1 },
  { id: 69, src: "https://i.ibb.co/K9f5r7r/IMG-1729.webp", alt: "International", type: "all", eventId: 1 },
  { id: 70, src: "https://i.ibb.co/yfpmw50/IMG-1810.webp", alt: "International", type: "all", eventId: 1 },
  { id: 71, src: "https://i.ibb.co/r27VbFt/IMG-1675.webp", alt: "International", type: "all", eventId: 1 },
  { id: 72, src: "https://i.ibb.co/MDLX9f0/IMG-1778.webp", alt: "International", type: "all", eventId: 1 },
  { id: 73, src: "https://i.ibb.co/FsM33YK/IMG-1700.webp", alt: "International", type: "all", eventId: 1 },
  { id: 74, src: "https://i.ibb.co/Y8mLPDs/IMG-1743.webp", alt: "International", type: "all", eventId: 1 },

  { id: 83, src: "https://i.ibb.co/5FbbQ00/IMG-9094.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 84, src: "https://i.ibb.co/vmjCRr0/IMG-8901.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 85, src: "https://i.ibb.co/xf4n3jF/IMG-8848.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 86, src: "https://i.ibb.co/THV0MP9/IMG-8746.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 87, src: "https://i.ibb.co/CvyfTZP/IMG-8573.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 88, src: "https://i.ibb.co/L61x7gH/IMG-8557.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 89, src: "https://i.ibb.co/vvySK4f/IMG-8547.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 90, src: "https://i.ibb.co/KxX3QyQ/IMG-8170.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 91, src: "https://i.ibb.co/L8ts4kZ/IMG-8335.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 92, src: "https://i.ibb.co/bQPpkB1/IMG-8288.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 93, src: "https://i.ibb.co/f4fkjYJ/IMG-7957.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 94, src: "https://i.ibb.co/pwZW2Ph/IMG-7996.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 95, src: "https://i.ibb.co/rQZKpVP/IMG-7978.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 96, src: "https://i.ibb.co/7ChdJSt/IMG-8027.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 97, src: "https://i.ibb.co/7KvfjR7/IMG-8031.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 98, src: "https://i.ibb.co/VWPT0wR/IMG-7941.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 99, src: "https://i.ibb.co/2j53Nr4/IMG-7970.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 100, src: "https://i.ibb.co/ZxN8v1G/IMG-8045.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 101, src: "https://i.ibb.co/gy8zFFh/IMG-8103.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 102, src: "https://i.ibb.co/26BYKmh/IMG-8142.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 103, src: "https://i.ibb.co/gSW2bgs/IMG-8155.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 104, src: "https://i.ibb.co/PQCP05L/IMG-8197.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 105, src: "https://i.ibb.co/YLnSF6c/IMG-8181.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 106, src: "https://i.ibb.co/y8FFCN0/IMG-8196.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 107, src: "https://i.ibb.co/RHk2S4q/IMG-8153.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 108, src: "https://i.ibb.co/sgdF03Y/IMG-8350.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 109, src: "https://i.ibb.co/Qkhrrp6/IMG-8373.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 110, src: "https://i.ibb.co/Z17nVj1/IMG-8381.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 111, src: "https://i.ibb.co/rsnYsQd/IMG-8417.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 112, src: "https://i.ibb.co/zrVCCwF/IMG-8515.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 113, src: "https://i.ibb.co/cwj1yv0/IMG-8896.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 114, src: "https://i.ibb.co/yWn5rJx/IMG-8856.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
  { id: 115, src: "https://i.ibb.co/chFk60w/IMG-8464.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
{ id: 116, src: "https://i.ibb.co/wppRZrQ/IMG-8386.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
  { id: 117, src: "https://i.ibb.co/cQ0jcHx/IMG-8215.webp", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
// { id: 118, src: "", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
// { id: 119, src: "", alt: "CSSE & ITCA photo", type: "keshav", eventId: 1 },
// for Fashmob or event id 2
  { id: 16, src: "https://i.ibb.co/TBxR2wk/IMG-9995.webp", alt: "Flashmob", type: "portrait", eventId: 2 },
{ id: 17, src: "https://i.ibb.co/DLnZzTb/IMG-2469.webp", alt: "Flashmob", type: "portrait", eventId: 2 },
{ id: 18, src: "https://i.ibb.co/Ttswp1F/IMG-4128.webp", alt: "Flashmob", type: "portrait", eventId: 2 },
{ id: 19, src: "https://i.ibb.co/sWp2J3z/IMG-3341.webp", alt: "Flashmob", type: "portrait", eventId: 2 },
{ id: 20, src: "https://i.ibb.co/cTvCmwT/IMG-3330.webp", alt: "Flashmob", type: "portrait", eventId: 2 },
{ id: 21, src: "https://i.ibb.co/ryw5Rhq/IMG-3325.webp", alt: "Flashmob", type: "portrait", eventId: 2 },
{ id: 22, src: "https://i.ibb.co/TT6g89w/IMG-4893.webp", alt: "Flashmob", type: "portrait", eventId: 2 },
{ id: 23, src: "https://i.ibb.co/jf6zLgD/IMG-9545.webp", alt: "Flashmob", type: "portrait", eventId: 2 },
{ id: 24, src: "https://i.ibb.co/b1hynBg/IMG-2460.webp", alt: "Flashmob", type: "portrait", eventId: 2 },
{ id: 25, src: "https://i.ibb.co/pPRpQB2/IMG-2459.webp", alt: "Flashmob", type: "portrait", eventId: 2 },
{ id: 26, src: "https://i.ibb.co/r7S2vk5/IMG-0031.webp", alt: "Flashmob", type: "portrait", eventId: 2 },
{ id: 27, src: "https://i.ibb.co/2yXW2HD/IMG-0013.webp", alt: "Flashmob", type: "portrait", eventId: 2 },
{ id: 28, src: "https://i.ibb.co/f1nWSyy/IMG-0153.webp", alt: "Flashmob", type: "portrait", eventId: 2 },
{ id: 29, src: "https://i.ibb.co/6nfXrqT/IMG-9848.webp", alt: "Flashmob", type: "portrait", eventId: 2 },
{ id: 30, src: "https://i.ibb.co/JxJ4Ycf/IMG-9985.webp", alt: "Flashmob", type: "portrait", eventId: 2 },




  // for Orientation or event id 3
  { id: 31, src: "https://i.ibb.co/d6b2NdB/IMG-9972.webp", alt: "orientation", type: "square", eventId: 3 },
{ id: 32, src: "https://i.ibb.co/zHxrF1z/IMG-9954.webp", alt: "orientation", type: "square", eventId: 3 },
{ id: 33, src: "https://i.ibb.co/5MyQkkj/IMG-9981.webp", alt: "orientation", type: "square", eventId: 3 },
{ id: 34, src: "https://i.ibb.co/0f7qDYT/IMG-9983.webp", alt: "orientation", type: "square", eventId: 3 },
{ id: 35, src: "https://i.ibb.co/gZxTZV6/IMG-9903.webp", alt: "orientation", type: "square", eventId: 3 },
{ id: 36, src: "https://i.ibb.co/Kzk2vkn/IMG-9956.webp", alt: "orientation", type: "square", eventId: 3 },
{ id: 37, src: "https://i.ibb.co/8bpn1Vz/IMG-9925.webp", alt: "orientation", type: "square", eventId: 3 },
{ id: 38, src: "https://i.ibb.co/ZK5nq3M/IMG-0564.webp", alt: "orientation", type: "square", eventId: 3 },
{ id: 39, src: "https://i.ibb.co/tHh0nBK/IMG-0597.webp", alt: "orientation", type: "square", eventId: 3 },
{ id: 40, src: "https://i.ibb.co/CwBNPpS/IMG-0618.webp", alt: "orientation", type: "square", eventId: 3 },
{ id: 41, src: "https://i.ibb.co/crpSH2s/IMG-0656.webp", alt: "orientation", type: "square", eventId: 3 },
{ id: 42, src: "https://i.ibb.co/kMsxzPL/IMG-0694.webp", alt: "orientation", type: "square", eventId: 3 },
{ id: 43, src: "https://i.ibb.co/fvxSp3C/IMG-0698.webp", alt: "orientation", type: "square", eventId: 3 },
{ id: 44, src: "https://i.ibb.co/kXLsrcq/IMG-0697.webp", alt: "orientation", type: "square", eventId: 3 },
{ id: 45, src: "https://i.ibb.co/gyDY2yJ/IMG-0774.webp", alt: "orientation", type: "square", eventId: 3 },
{ id: 46, src: "https://i.ibb.co/Z8Jpnxz/IMG-0567.webp", alt: "orientation", type: "square", eventId: 3 },





  // for sports or event id 4
  { id: 47, src: "https://i.ibb.co/BLJQjQ6/IMG-3088.webp", alt: "Sports photo", type: "sports", eventId: 4 },
{ id: 48, src: "https://i.ibb.co/Lz9L6G0/IMG-3533.webp", alt: "Sports photo", type: "sports", eventId: 4 },
{ id: 49, src: "https://i.ibb.co/6y2vRYw/imaginator-169.webp", alt: "Sports photo", type: "sports", eventId: 4 },
{ id: 50, src: "https://i.ibb.co/ZBn5mGK/imaginator-192.webp", alt: "Sports photo", type: "sports", eventId: 4 },
{ id: 51, src: "https://i.ibb.co/dcSNSr6/IMG-9229.webp", alt: "Sports photo", type: "sports", eventId: 4 },
{ id: 52, src: "https://i.ibb.co/cbBv7Wn/IMG-9228.webp", alt: "Sports photo", type: "sports", eventId: 4 },
{ id: 53, src: "https://i.ibb.co/cX75VnP/IMG-9205.webp", alt: "Sports photo", type: "sports", eventId: 4 },
{ id: 54, src: "https://i.ibb.co/XSGCf0X/IMG-9177.webp", alt: "Sports photo", type: "sports", eventId: 4 },
{ id: 55, src: "https://i.ibb.co/VBvbzSZ/IMG-9315.webp", alt: "Sports photo", type: "sports", eventId: 4 },
{ id: 56, src: "https://i.ibb.co/LrBNyRP/IMG-9329.webp", alt: "Sports photo", type: "sports", eventId: 4 },
{ id: 57, src: "https://i.ibb.co/KqJ0RM6/IMG-8815.webp", alt: "Sports photo", type: "sports", eventId: 4 },
{ id: 58, src: "https://i.ibb.co/ckmRqHr/IMG-9280.webp", alt: "Sports photo", type: "sports", eventId: 4 },
{ id: 59, src: "https://i.ibb.co/Q8ZBht2/IMG-9270.webp", alt: "Sports photo", type: "sports", eventId: 4 },
{ id: 60, src: "https://i.ibb.co/z4Sj44Y/imaginator-210.webp", alt: "Sports photo", type: "sports", eventId: 4 },

  
  // for AUUPC or event id 6
  { id: 75, src: "https://i.ibb.co/DwrxYXz/IMG-3355.jpg", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 76, src: "https://i.ibb.co/RY0QSCX/IMG-20240530-WA0031-EATI-RUPENDRASRIVINAYGAR.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 77, src: "https://i.ibb.co/HYxLMg0/Whats-App-Image-2024-08-08-at-10-44-49-AM.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 78, src: "https://i.ibb.co/1Qty61K/a9cab410-561f-4192-93e4-ff7f38f9cf5a.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 79, src: "https://i.ibb.co/2cr0t6D/Whats-App-Image-2024-08-08-at-10-43-56-AM.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 80, src: "https://i.ibb.co/nD9Ct9q/91785eca-8f65-4f75-9a8d-043fa41553aa.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 81, src: "https://i.ibb.co/QbzPFZT/IMG-20240227-WA0009-Raja-Jampana.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 82, src: "https://i.ibb.co/sqCm6JM/IMG-20240224-074846-N-V-S-Krishna-Rao.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 83, src: "https://i.ibb.co/XZsJzQp/20200627-161824-Hitha-Nadisetty.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 84, src: "https://i.ibb.co/yVTvW4J/Whats-App-Image-2024-08-08-at-10-44-34-AM.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 85, src: "https://i.ibb.co/KyyZsYM/DSC02835-karthik.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 86, src: "https://i.ibb.co/C7QznZt/1723096196571-Jayanth.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 87, src: "https://i.ibb.co/J5KkwsQ/4-1-Yuvaraj-M.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 88, src: "https://i.ibb.co/6m3rGQ2/1-1-Yuvaraj-M.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 89, src: "https://i.ibb.co/8jH5BYq/1723096196496-Jayanth.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 70, src: "https://i.ibb.co/9sRVw5q/1723096196552-Jayanth.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 71, src: "https://i.ibb.co/dbkNkFG/20231103-164234-Helsa-Helsa.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 72, src: "https://i.ibb.co/x6JbtRk/1723096196629-Jayanth.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 73, src: "https://i.ibb.co/SsWfJ3x/IMG-20240715-162358-EATI-RUPENDRASRIVINAYGAR.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 74, src: "https://i.ibb.co/sbp0r1h/IMG-20240730-181424-1-Aakash-Kinthali.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 75, src: "https://i.ibb.co/kQmCjsZ/Photo-SRI-HARSHITHA-JAVANGULA.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 76, src: "https://i.ibb.co/JKPTbnW/pic2-Bhanu-Chandra-Rekha-Boddu.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 77, src: "https://i.ibb.co/cDXH285/1722443361687-Praneeth-Bhukya.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 78, src: "https://i.ibb.co/2gk6pCc/Screenshot-20221130-185631-Helsa-Helsa.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 79, src: "https://i.ibb.co/2YgTwpy/2-1-Yuvaraj-M.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 80, src: "https://i.ibb.co/6bwF887/IMG-20240702-175018-NSR-Anand.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 81, src: "https://i.ibb.co/0fdp1Y4/IMG-20240518-001802-NSR-Anand.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 82, src: "https://i.ibb.co/b7BPmTq/sathwik-clickzzz-Sathwik-Mylabathula.webp", alt: "AUUPC", type: "all", eventId: 6 },
  { id: 120, src: "https://i.ibb.co/SJksxyq/IMG-8297.jpg", alt: "AUUPC", type: "By Keshav", eventId: 6 },
{ id: 121, src: "https://i.ibb.co/RT7Pg9b/20210729215616-IMG-6561-1.jpg", alt: "AUUPC", type: "By Keshav", eventId: 6 },
{ id: 122, src: "https://i.ibb.co/JqLpGQR/20210618051012-IMG-5082-01.jpg", alt: "AUUPC", type: "By Keshav", eventId: 6 },
{ id: 123, src: "https://i.ibb.co/r7xhc4b/20210404034741-IMG-8805-1.jpg", alt: "AUUPC", type: "By Keshav", eventId: 6 },
{ id: 124, src: "https://i.ibb.co/9Yzn4Tm/20210326054915-IMG-7863-EFFECTS-01-1.jpg", alt: "AUUPC", type: "By Keshav", eventId: 6 },
  { id: 125, src: "https://i.ibb.co/6bb5GCV/IMG-8524.jpg", alt: "AUUPC", type: "By Keshav", eventId: 6 },
{ id: 126, src: "https://i.ibb.co/7GsJpJK/20230701024537-IMG-7585.jpg", alt: "AUUPC", type: "By Keshav", eventId: 6 },
];

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Gallery = () => {
  const [shuffledPhotos, setShuffledPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    setShuffledPhotos(shuffleArray(photos));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledPhotos.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [shuffledPhotos]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledPhotos.length);
  }, [shuffledPhotos]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + shuffledPhotos.length) % shuffledPhotos.length);
  }, [shuffledPhotos]);

  const filterPhotosByEvent = (eventId) => {
    setSelectedEvent(eventId);
    setShuffledPhotos(shuffleArray(photos.filter(photo => photo.eventId === eventId)));
    setCurrentIndex(0);
  };

  const openModal = (photo) => {
    setModalImage(photo);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const SliderGallery = () => (
    <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] mb-8 bg-gray-100 rounded-lg overflow-hidden">
      <img
        src={shuffledPhotos[currentIndex]?.src}
        alt={shuffledPhotos[currentIndex]?.alt}
        className="w-full h-full object-contain cursor-pointer"
        onClick={() => openModal(shuffledPhotos[currentIndex])}
      />
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 md:p-3 rounded-full hover:bg-opacity-75 transition-all duration-300"
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 md:p-3 rounded-full hover:bg-opacity-75 transition-all duration-300"
        aria-label="Next slide"
      >
        &#10095;
      </button>
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
        <p className="text-xs md:text-sm">{shuffledPhotos[currentIndex]?.alt}</p>
      </div>
    </div>
  );

  const MasonryGallery = () => (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
      {shuffledPhotos.map((photo) => (
        <div key={photo.id} className="mb-4 break-inside-avoid group relative">
          <img 
            src={photo.src} 
            alt={photo.alt} 
            className="w-full rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300 cursor-pointer" 
            onClick={() => openModal(photo)}
            loading="lazy"
          />
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-xs md:text-sm">{photo.alt}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const Modal = () => {
    if (!modalImage) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
        <div className="relative max-w-4xl max-h-[90vh] h-full  w-full mx-4">
          <img 
            src={modalImage.src} 
            alt={modalImage.alt} 
            className="w-full h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button 
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300"
            onClick={closeModal}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
            <p className="text-xs md:text-sm">{modalImage.alt}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-indigo-800">AU United Photography Club Gallery</h1>
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 flex items-center justify-center">
          <Calendar className="mr-2" />Events
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {events.map((event) => (
            <button
              key={event.id}
              onClick={() => filterPhotosByEvent(event.id)}
              className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base ${selectedEvent === event.id ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-indigo-500 hover:text-white transition-colors duration-300`}
            >
              {event.name}
            </button>
          ))}
          <button
            onClick={() => {
              setSelectedEvent(null);
              setShuffledPhotos(shuffleArray(photos));
              setCurrentIndex(0);
            }}
            className="px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base bg-gray-200 text-gray-800 hover:bg-indigo-500 hover:text-white transition-colors duration-300"
          >
            All Photos
          </button>
        </div>
      </div>
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mb-8 text-center">
        <p className="text-sm md:text-base text-gray-700">
          <strong>Copyright Notice:</strong> All photos in this gallery are subject to copyright. 
          Unauthorized use, reproduction, or distribution is prohibited.
        </p>
      </div>
      <SliderGallery />
      <h2 className="text-xl md:text-2xl font-semibold mb-4 flex items-center justify-center">
        <Columns className="mr-2" /> Photo Gallery
      </h2>
      <MasonryGallery />
      <Modal />
    </div>
  );
};

export default Gallery;