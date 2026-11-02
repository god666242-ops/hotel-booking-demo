// Unsplash photos. To use the hotel's own photos, put files in /public/images and use "/images/durga-nivas/room1.jpg".
const u = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;
export const I = {
  r1: u("1631049307264-da0ec9d70304"), r2: u("1590490360182-c33d57733427"), r3: u("1611892440504-42a792e24d32"),
  r4: u("1618773928121-c32242e63f39"), r5: u("1566665797739-1674de7a421a"), r6: u("1595576508898-0ad5c879a061"),
  r7: u("1578683010236-d716f9a3f461"), r8: u("1582719478250-c89cae4dc85b"),
  bath: u("1584132967334-10e028bd69f7"), lobby: u("1551882547-ff40c63fe5fa"), ext: u("1542314831-068cd1dbfeeb"), food: u("1504754524776-8f4f37790ca0"),
};
