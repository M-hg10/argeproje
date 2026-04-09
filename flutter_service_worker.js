'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3ae4c4170fa60bc93947a398fa1cf19a",
".git/config": "3ec57f9f7e53d4e6862485ff013d0c81",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5a1dd54b77a8eb9018236c8b3642ef52",
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
".git/index": "fae8444a0380c2137cc6c747dcd6549d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5576584a75d428fba8dd88119ae14207",
".git/logs/refs/heads/main": "5576584a75d428fba8dd88119ae14207",
".git/logs/refs/remotes/origin/main": "a61355b2d2393c52164fb05b483292bf",
".git/objects/01/6319daad40a39d936ee4d5d0ae03555388b937": "a1ef20415b03544390839b8a72d4dd6d",
".git/objects/02/0de208558aff3c700259e8562fec59eaa8ed92": "d6a251f2c7de60afd6466796db520a4d",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/8ea1f210f4cb56f45aa54b6cf626661e8bc362": "09cae3ee2f8fcd4005d5bb9165b74045",
".git/objects/09/3940a716805e8ffa218feb44b8366e01c97cd6": "58643bf0ec8c3ec9cbd5b6b974ea2d72",
".git/objects/0b/b2b3231621c5f34d6521e333d168473168b7c4": "77a0f306038e6ff6ae4818743374b19f",
".git/objects/14/7a9c00c3188c4fce2fdc3a2ac962559db0e2e0": "343e58ec112cce417baac7bdc09075eb",
".git/objects/1c/35e23d3b5f6384732790a0f880fd720097423f": "030072d13067b06ed38dd9b3983a1acf",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/34375e2d03890a077d9b75c010ac077387bdd9": "4d3e697cce57acfe51278258d586672f",
".git/objects/2b/8b67f14f3adbb650e1f55e8b89902e19281bd8": "1859c9b48dfa12c785648bf0b5027f4f",
".git/objects/2f/f1624f2cf9edfffad3bae13f43c23f69a198ac": "9780c9b474c369027908aae40e163934",
".git/objects/31/045d03b390ecdf5293e1f73a745fe21e69c8f6": "27f1d3781b3099d8aa1f67285852692e",
".git/objects/32/1c40aa3a1845b700d846cf96404395d7ed09e5": "d43cf42afd42b9a01ef83955ff308ac4",
".git/objects/33/86f68bf40f198dd593354cb8c2fd6e2c063e99": "a09f490e4680934cdd430fffa5802e15",
".git/objects/39/cd3508da28dbc4f753984bf4c141d6a9ba485a": "7c5bf54bd1ebcbaa93ad5ed97b61ebe9",
".git/objects/39/f2e2983dbff35e03e53e974180e8a01ab3a2b1": "bd2364cf9cbd30331eb549b390e8f219",
".git/objects/3a/e3cab948b2a4645e1d75a9a7390040c59d4078": "4c7c0f18f7b6861642569e3ea1d591e6",
".git/objects/3b/ef380551994dd8b666815a8e550050d4c34237": "3aac0ff44c3f3381651327084bf625a1",
".git/objects/3c/b01a1d8fa6dd953c7f04a7d3740a968bcf2c0a": "c9c6a018dbd7c92074bcc3e7aba60d20",
".git/objects/3e/e47ab366f6738bf996befcfd280a3f3fce1468": "75cc793678dd8057455ea532a25dd0eb",
".git/objects/43/c37f3f02e1072fd3131dca004cc90a46b27223": "61815e2c1e86c4307858d8cfc9d585f1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/833b0b08926613619be4998321c4afa296257f": "00a39da1c19898c1c6d69ca6894d0237",
".git/objects/49/13052b8877cdf921f7f1ac05c17b48651763e0": "f31a0b0b37f660e146a55e6135b414c3",
".git/objects/4b/fe67f1c758dba016bccc3dc3d4f19fad063595": "1ea039c8816fcfc6b56a43bc93baa7aa",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/51/23f6ebd8e1c698e0664154bb7ff2d215f35e01": "3fb0697cc150de6a9972ac7d1fb80665",
".git/objects/54/6904cfb2cb9de31a52639a9447706b2046e579": "454b42921314bbae8102127a3b65d606",
".git/objects/55/f3e4a9a011834fc3c9683a14a10af03ac81d11": "331f20528ae43571c5f78ca9a6a8b6f5",
".git/objects/57/5db7e0548e09b53d8f43d2ca1c2ce99728823e": "49139293758627b79e3894f6a2a72dfb",
".git/objects/58/4e8bd15783804f6619186a0dbacc669e0ed324": "461ab6adbac5d5e95724c313de767279",
".git/objects/5d/057b3139ae42c4ec71783a43a66c6f60ac967d": "47f2ee0c51d6bdcbf74263b5af9ef855",
".git/objects/5d/f8015f25bcbd375ccfb31e61edfabf749fec1d": "8fec332b02af193028bbe66f02bdb6fe",
".git/objects/61/81fd7d4ef7968d7337b0d09ba2f1b74cab6e8b": "5c9f23b096b21c375a66cac6e9f8c10d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/69/efd6bcfdf4097f3c232c4e68073b89b77dc17c": "c7e3ab0ca78158fe75268b8a6b2371f1",
".git/objects/6a/7112bc37688844796eedd7c7de47fc5017a8c7": "e71c08d37c3cad091fb2ea003e3e5e77",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/78/7087936b8327664a7be0718a6012f5e25c03e2": "b2235ddcd75a213cbc96d7350f258619",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/80/9656c67d6238a37f65f49b9c2cf4f4cac5ffd7": "4d60465365562fbbd8ece5a05d5aed1c",
".git/objects/84/a96842dbe4621cdc241d162113443224d2e7a2": "704b813222bf2c27b8b72618ff028dc5",
".git/objects/85/966ba591fc8114a7c4132b6924a34d719a61ca": "4963749362a4cca9f80249c14ae01eaa",
".git/objects/86/f3e154049cfd767f419298b7478a006049dc20": "202ce0391bb48c477d798befe35e45aa",
".git/objects/87/6cc40ac5401f21dc60e10e56b67103861ff160": "bfb0f8b906a7c62c0b37a26140aea418",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/7b53c895166acadbd44603ec8e7db0f01f82ce": "e514dfea03a63e9f2088f1a0f728632c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/94/b541569f9210ff3383c9851003e04f4637c6f6": "df2068d63ce0e3b895e8740bad7be8f0",
".git/objects/95/bdd17f447fb7ae17c0816444d5dfe7d2250742": "29064967113f702aa6233c9e4b6d6199",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9a/70cfb961f8de644ee6cfb91533c8dc2952438e": "cd162aae5a2cea3b2941f50be25a588c",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9d/1e8e6197cf44c1792bad1102209a544a5f1964": "c9f884af9598127bd0d92c7f5a2b0a84",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/aa/07b0271af22e83898a8c1cdb8d3b7e4e251fc3": "00aa66e2b0714559da5d715074c5e538",
".git/objects/aa/521b6b0a4191ab200074a04be275faeb7cf14b": "2c989019ff28355874eea4c201a5b29e",
".git/objects/b1/023a96c677cfaa8d828ad9ac2b20d882bcbda0": "20215c6de734649a68325e56904008ce",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b2bced79e93ee80838496bc4225b46078b42f5": "70f5e58cbbfd09106bcb0ceeebf7867c",
".git/objects/b9/1c91984ef0105b4c6401b917317e60bf86856e": "05d48358369b22701e5fab65e9af17c5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/00e1932f7d1090274d3d6c0c63df9f2c55f62a": "f72745d23f8e2088146e189a429bab35",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c7/9962c0cd1a242b38c2bffcf1699bc8bcd65c20": "a1f129f16fcfe45657b2849261582c9c",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/fd6ed2a376bca86b2d2141712ea98735c996ae": "3b741412cf00876ed7493f65757913aa",
".git/objects/d0/0b3008cf1131060e8d15797dd23daffe1b55cb": "c5b26e779bef70d2f6d9ea02891550b6",
".git/objects/d3/3a77eb68d5d8e213672a0b103313ab24b2fbd3": "bfbef0c84810ee7c0951bd3713cb060b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/cab07079b38e47337546a1d5d6731b40399e32": "5d24509f4d502620ae0b7b18971e6fff",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e6/1857d4d032a976c80c283b5dfe5319dcc38570": "2359c0e594b58898d9d7b3fc86169365",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/59bff0cdb68ed7c73654b6e2383d452ea077a1": "1b4e69c724671dc42020bf47d0522210",
".git/objects/eb/40f98ec68a363ed8f52a70855a9cab82464920": "2c3b95dd4431e7e41cebd413a89c6382",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/6920a8f6a6dd8e6ccf514926172bc6c2c67317": "4d37e7000d3aae0d27f3cbe311d3cdbe",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f0/4eaff287716ca97de0ab3b67861be15c1a3629": "bcb17c08c77b8f09dbf3488d30eac7da",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/4713a6b39cae602e7b69ea6aabed8fc4df8282": "f723fef7642915cc3c4991e713d6e8aa",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/20dae4b78ddb0bab5f2d44d44b5d5d170d8faa": "e52828e658f4fdc7e71fd8737c1afc82",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/ORIG_HEAD": "eb4e6d1ba7bd3fd887b4ee4eae892dbf",
".git/refs/heads/main": "eb4e6d1ba7bd3fd887b4ee4eae892dbf",
".git/refs/remotes/origin/main": "eb4e6d1ba7bd3fd887b4ee4eae892dbf",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d16b2b2ccbc749a53f502a7504ee3f29",
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
"flutter_bootstrap.js": "d7bb19649228e514a11a19fb80aac93f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3c2832bb12655f0399b8fbd918cd6cb5",
"/": "3c2832bb12655f0399b8fbd918cd6cb5",
"main.dart.js": "22fb6cb9f9ca77e69ac1695eb8964dd0",
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
