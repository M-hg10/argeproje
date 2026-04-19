'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ca3d4ec1baff16223feaf0e463b39483",
".git/config": "3ec57f9f7e53d4e6862485ff013d0c81",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f76b4526f4b5329c71db13054c22a55c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "785bdf67f2ec12965a8fff7fc594609b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "75d29761d279f265ab4c28b934320ce3",
".git/logs/refs/heads/main": "75d29761d279f265ab4c28b934320ce3",
".git/logs/refs/remotes/origin/main": "969ab869ed8853b208cb8d85dce0ba42",
".git/objects/00/f1357f2e4980466c4bafb0ee7d6ce988299892": "c3af8778b5d9cc036a3907f0c57c9442",
".git/objects/01/6319daad40a39d936ee4d5d0ae03555388b937": "a1ef20415b03544390839b8a72d4dd6d",
".git/objects/02/0de208558aff3c700259e8562fec59eaa8ed92": "d6a251f2c7de60afd6466796db520a4d",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/02/e34b9d95e0c71b3e6fe8e7fc3dad1f09bbf5bd": "dd49374b973bc47719ed4dbd724fc7f5",
".git/objects/02/ffeb96e0fc5d4ca4873e5fb6dd287956c4f6c1": "054c0f55c7c5c52c21939e3ada3bafb2",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/8ea1f210f4cb56f45aa54b6cf626661e8bc362": "09cae3ee2f8fcd4005d5bb9165b74045",
".git/objects/07/fcc4af4fc20163c94c2ecdf5acd3459aae50da": "0d29d74f52d9b6634961c2010b5e9987",
".git/objects/09/3940a716805e8ffa218feb44b8366e01c97cd6": "58643bf0ec8c3ec9cbd5b6b974ea2d72",
".git/objects/0b/b2b3231621c5f34d6521e333d168473168b7c4": "77a0f306038e6ff6ae4818743374b19f",
".git/objects/0e/f2699834ad2a990d36cd48814f19236d4f79f5": "3741f78c5ee20896bbfb5e0104cb4ea8",
".git/objects/10/49f6f32e8e2d337fb9e222d54583eace94b4a7": "8de8f743e5cba1b7f4fe851947257b32",
".git/objects/14/7a9c00c3188c4fce2fdc3a2ac962559db0e2e0": "343e58ec112cce417baac7bdc09075eb",
".git/objects/15/a1d8a1f61729a45493ff17cad08af503afe22f": "dea8e041ee0e8711d6cd2dd80725ab58",
".git/objects/18/33b07b5b9a43a5f2784a9eaf8194deb8a7f53a": "892e0a96fc067ffae06749c3738b7a4d",
".git/objects/1c/35e23d3b5f6384732790a0f880fd720097423f": "030072d13067b06ed38dd9b3983a1acf",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/25/4002f7d08f09af711a3e0df6de3e5565f273e8": "1ca85cae2267e2f7c892690938b3423f",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/34375e2d03890a077d9b75c010ac077387bdd9": "4d3e697cce57acfe51278258d586672f",
".git/objects/2b/8b67f14f3adbb650e1f55e8b89902e19281bd8": "1859c9b48dfa12c785648bf0b5027f4f",
".git/objects/2f/6299a51b2d410bb819079e8eabae42b23e9285": "b17020cf92cad2c1ea4c879552e496e9",
".git/objects/2f/f1624f2cf9edfffad3bae13f43c23f69a198ac": "9780c9b474c369027908aae40e163934",
".git/objects/31/045d03b390ecdf5293e1f73a745fe21e69c8f6": "27f1d3781b3099d8aa1f67285852692e",
".git/objects/32/1c40aa3a1845b700d846cf96404395d7ed09e5": "d43cf42afd42b9a01ef83955ff308ac4",
".git/objects/33/86f68bf40f198dd593354cb8c2fd6e2c063e99": "a09f490e4680934cdd430fffa5802e15",
".git/objects/35/0aef9a025d1b4b60636e3f27a036b30add17b3": "e611963d47c6405ba70870c2af62b374",
".git/objects/39/cd3508da28dbc4f753984bf4c141d6a9ba485a": "7c5bf54bd1ebcbaa93ad5ed97b61ebe9",
".git/objects/39/f2e2983dbff35e03e53e974180e8a01ab3a2b1": "bd2364cf9cbd30331eb549b390e8f219",
".git/objects/3a/e3cab948b2a4645e1d75a9a7390040c59d4078": "4c7c0f18f7b6861642569e3ea1d591e6",
".git/objects/3b/ef380551994dd8b666815a8e550050d4c34237": "3aac0ff44c3f3381651327084bf625a1",
".git/objects/3c/b01a1d8fa6dd953c7f04a7d3740a968bcf2c0a": "c9c6a018dbd7c92074bcc3e7aba60d20",
".git/objects/3e/e47ab366f6738bf996befcfd280a3f3fce1468": "75cc793678dd8057455ea532a25dd0eb",
".git/objects/43/02312f3db39f6cc22153e0be927129f5de33e6": "3c84068fec21acff3affecf6f3efbe0b",
".git/objects/43/c37f3f02e1072fd3131dca004cc90a46b27223": "61815e2c1e86c4307858d8cfc9d585f1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/833b0b08926613619be4998321c4afa296257f": "00a39da1c19898c1c6d69ca6894d0237",
".git/objects/49/13052b8877cdf921f7f1ac05c17b48651763e0": "f31a0b0b37f660e146a55e6135b414c3",
".git/objects/4a/86706efce66d90491a4c57c77d82a1d90adc54": "58026e6b9217bb1bea6779661110fe0a",
".git/objects/4b/fe67f1c758dba016bccc3dc3d4f19fad063595": "1ea039c8816fcfc6b56a43bc93baa7aa",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4e/730e236afda4c95a9a1f91e82ea832eaa44e49": "865bae6e075d61591ca373d76abac2e6",
".git/objects/4f/ea2f25a7f4329e3829c64861c580c0f93b1693": "5ac089fa05526a74390f515561873b2c",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/51/23f6ebd8e1c698e0664154bb7ff2d215f35e01": "3fb0697cc150de6a9972ac7d1fb80665",
".git/objects/52/709305a11d9fb9abaac0aea76a8ab5040fc605": "aa957a77ed62fd48e73404fd7fbfdcb8",
".git/objects/52/eac7875436551ad74ff1f53a01ca3199b943f6": "7ce0f56c05a727a19106d77f14916a4a",
".git/objects/54/6904cfb2cb9de31a52639a9447706b2046e579": "454b42921314bbae8102127a3b65d606",
".git/objects/55/f3e4a9a011834fc3c9683a14a10af03ac81d11": "331f20528ae43571c5f78ca9a6a8b6f5",
".git/objects/57/5db7e0548e09b53d8f43d2ca1c2ce99728823e": "49139293758627b79e3894f6a2a72dfb",
".git/objects/58/4e8bd15783804f6619186a0dbacc669e0ed324": "461ab6adbac5d5e95724c313de767279",
".git/objects/58/a9e6ea621774e4ec377850d16d5a826fd9dde6": "aff6f6189c5334827d831ee3d283930b",
".git/objects/5d/057b3139ae42c4ec71783a43a66c6f60ac967d": "47f2ee0c51d6bdcbf74263b5af9ef855",
".git/objects/5d/f8015f25bcbd375ccfb31e61edfabf749fec1d": "8fec332b02af193028bbe66f02bdb6fe",
".git/objects/5d/fafa192a2155fe09c4aeb3ce0dcd82bf21a843": "da36e360b2708adf098954712c0bb3cd",
".git/objects/5f/61e2fcdb98cae3280387d31f51241a01559370": "a5b0f648b410dd1f021648645f376d59",
".git/objects/61/81fd7d4ef7968d7337b0d09ba2f1b74cab6e8b": "5c9f23b096b21c375a66cac6e9f8c10d",
".git/objects/66/a3f0755c1b639cdcd93bcc673df1eb9ed15a88": "b695f2f2f0ee88cd424b9e5cf011330c",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/69/efd6bcfdf4097f3c232c4e68073b89b77dc17c": "c7e3ab0ca78158fe75268b8a6b2371f1",
".git/objects/6a/7112bc37688844796eedd7c7de47fc5017a8c7": "e71c08d37c3cad091fb2ea003e3e5e77",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/265cda9b5a5d2e5341acecf759d442f8e9f35a": "fdbe162202f2ed9ef59fe2910d813e54",
".git/objects/73/8c08d0e679674f656aa2fe8b5e66912c02b9dc": "c7aba1afbefc8fd22a6e354b66d0e45c",
".git/objects/78/7087936b8327664a7be0718a6012f5e25c03e2": "b2235ddcd75a213cbc96d7350f258619",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7b/c0ff4661c13c3a8d0e4376cd2147c548f44330": "ee0814967d3dcb0a4b4a3c8aabc40142",
".git/objects/7e/b0356452886f926719e59dee3bb773b4059e04": "ca30983f0c202a4fefdd08a3e6db0615",
".git/objects/7f/73ebc066666253dd5a7b1b53fc05662f0f5857": "eeea52f35a33ac09104cb9692e9a2f97",
".git/objects/80/9656c67d6238a37f65f49b9c2cf4f4cac5ffd7": "4d60465365562fbbd8ece5a05d5aed1c",
".git/objects/82/5413fae3ec4ffa56f3c4ae402a2dc5198a83f5": "ffced93d544d150bbd76b42c05c36f9a",
".git/objects/82/f8b9e6519c1cf62ea8aae225e5767ba53522d6": "26505e9da2a2d441727c9c8a4a8e078f",
".git/objects/84/a96842dbe4621cdc241d162113443224d2e7a2": "704b813222bf2c27b8b72618ff028dc5",
".git/objects/85/966ba591fc8114a7c4132b6924a34d719a61ca": "4963749362a4cca9f80249c14ae01eaa",
".git/objects/86/f3e154049cfd767f419298b7478a006049dc20": "202ce0391bb48c477d798befe35e45aa",
".git/objects/87/6cc40ac5401f21dc60e10e56b67103861ff160": "bfb0f8b906a7c62c0b37a26140aea418",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/7b53c895166acadbd44603ec8e7db0f01f82ce": "e514dfea03a63e9f2088f1a0f728632c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/99b87f7deb36a662001ec3e9a200e8a8b31969": "64ef4910079104694e7273b1bb92aeef",
".git/objects/8c/14a187a54f730b9c534fab977714709d1a0c72": "e4ece35bce347df80986db33668cf2be",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/94/b541569f9210ff3383c9851003e04f4637c6f6": "df2068d63ce0e3b895e8740bad7be8f0",
".git/objects/95/bdd17f447fb7ae17c0816444d5dfe7d2250742": "29064967113f702aa6233c9e4b6d6199",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/99/359870978234dfb5de913b5dbf231e56b1b4a5": "59c501eb75896d1d4be36f41a420bf44",
".git/objects/9a/70cfb961f8de644ee6cfb91533c8dc2952438e": "cd162aae5a2cea3b2941f50be25a588c",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9d/1e8e6197cf44c1792bad1102209a544a5f1964": "c9f884af9598127bd0d92c7f5a2b0a84",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/aa/07b0271af22e83898a8c1cdb8d3b7e4e251fc3": "00aa66e2b0714559da5d715074c5e538",
".git/objects/aa/521b6b0a4191ab200074a04be275faeb7cf14b": "2c989019ff28355874eea4c201a5b29e",
".git/objects/b1/023a96c677cfaa8d828ad9ac2b20d882bcbda0": "20215c6de734649a68325e56904008ce",
".git/objects/b1/37efc1d51a8b3d8e75821103c16bc8bace806e": "9275871d10dfaa12018b54dab8840692",
".git/objects/b3/a43e7f548c44667ec3c7f17558da9a10a0e176": "59895220f94452251c71a887fce2caf7",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b2bced79e93ee80838496bc4225b46078b42f5": "70f5e58cbbfd09106bcb0ceeebf7867c",
".git/objects/b9/1c91984ef0105b4c6401b917317e60bf86856e": "05d48358369b22701e5fab65e9af17c5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/7441626a7d4e6a6d8606952246fed30d886b59": "983f0b596a0a87f7c62aad161501ee1f",
".git/objects/bf/00e1932f7d1090274d3d6c0c63df9f2c55f62a": "f72745d23f8e2088146e189a429bab35",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c5/353ef6b25e71581b54f7f31cc7a3685b2c5a41": "e941b4a3c8f49694414f59c6697a645a",
".git/objects/c7/9962c0cd1a242b38c2bffcf1699bc8bcd65c20": "a1f129f16fcfe45657b2849261582c9c",
".git/objects/ca/19bfa3634ac6f74ce1ff2ffd5bf81be0fa9f38": "ab6e08e0ea86a2293c96f8d1bafd3713",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/fd6ed2a376bca86b2d2141712ea98735c996ae": "3b741412cf00876ed7493f65757913aa",
".git/objects/cc/554babadba499cca6ab7cf6380758d3c26a3bd": "06a5f077800a6e18f3a027bcffd112b4",
".git/objects/cd/618f7cef4f6bac1ab4e702f83c665900f48904": "4fe059515deb5682e5388ba20379a13a",
".git/objects/d0/0b3008cf1131060e8d15797dd23daffe1b55cb": "c5b26e779bef70d2f6d9ea02891550b6",
".git/objects/d1/bfe18760fb6a574a01845b3149233365e9e6a8": "8fc82de33e598963d1306e842652c2f8",
".git/objects/d1/f63ba21a02108cf0b723065f01823ee037f500": "7ebcf8c91cb0de2befb8e362143c52fa",
".git/objects/d3/3a77eb68d5d8e213672a0b103313ab24b2fbd3": "bfbef0c84810ee7c0951bd3713cb060b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/cab07079b38e47337546a1d5d6731b40399e32": "5d24509f4d502620ae0b7b18971e6fff",
".git/objects/dc/de152ad5a3898d26c1b4489f05be7d48ced051": "4d5dfa02e26cc4b673fb941ef220be41",
".git/objects/df/3ab6079ccf3a3653eebcf37a58f9bb11de3290": "aae299767898cc8073685d668c495a43",
".git/objects/e3/45c24e6ab0738cca5d90871c72a0b3a74e82d0": "bfd6fd1312a79c61cc151bb2a3eabc1b",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e5/9decb001f6c1560155a8f863a517fee64f12b5": "04d07d9ea22cea6a2cd39ec9a4f31ca7",
".git/objects/e6/1857d4d032a976c80c283b5dfe5319dcc38570": "2359c0e594b58898d9d7b3fc86169365",
".git/objects/e6/7881571a3acbfdc0f7a0fc6ad2124ad57135a5": "2806a506c695aa2e121e8e08571b7319",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/59bff0cdb68ed7c73654b6e2383d452ea077a1": "1b4e69c724671dc42020bf47d0522210",
".git/objects/eb/40f98ec68a363ed8f52a70855a9cab82464920": "2c3b95dd4431e7e41cebd413a89c6382",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/6920a8f6a6dd8e6ccf514926172bc6c2c67317": "4d37e7000d3aae0d27f3cbe311d3cdbe",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f0/4eaff287716ca97de0ab3b67861be15c1a3629": "bcb17c08c77b8f09dbf3488d30eac7da",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/392f0d2860c34a107fa99cff6ef9ee8b816f15": "2d96033a25a3471ffa70630a121369df",
".git/objects/f2/4713a6b39cae602e7b69ea6aabed8fc4df8282": "f723fef7642915cc3c4991e713d6e8aa",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/9d3b1c67c548a33809f9d8a2a5d091476dac63": "9a77b7e0d63ef3489d0f811cfe6a8954",
".git/objects/f8/20dae4b78ddb0bab5f2d44d44b5d5d170d8faa": "e52828e658f4fdc7e71fd8737c1afc82",
".git/objects/fa/4160159d30f71cee6d52fa13ef40f35f657098": "fb5629c2bad4cdc2e12511ee48597dad",
".git/objects/fd/322830e89c671deddcdb9738de9396014524d1": "6d604e83bd49ef69e34af29dec4b0212",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/fc2b38fc24effa60b5c37b4698230f172654e9": "180df0bc6704ae21308de2c835bb36b9",
".git/ORIG_HEAD": "45ff0d84e2b95a5ddbe58a8c48086894",
".git/refs/heads/main": "45ff0d84e2b95a5ddbe58a8c48086894",
".git/refs/remotes/origin/main": "45ff0d84e2b95a5ddbe58a8c48086894",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1ccb2532e8bbb7e53cef6278c5dc9659",
"assets/NOTICES": "91ac176075d1a88d3a42f243a98845a2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "d990152e5bbfa35f7db976e3a6244049",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3c2832bb12655f0399b8fbd918cd6cb5",
"/": "3c2832bb12655f0399b8fbd918cd6cb5",
"main.dart.js": "2d9c269e864ceceba840e31385a95338",
"manifest.json": "e07c1e8a398839171f70944829d96fcf",
"version.json": "3b377ac0b0d983cb5bda16dfc35f68da"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
