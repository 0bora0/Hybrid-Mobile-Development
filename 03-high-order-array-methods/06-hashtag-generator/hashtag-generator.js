function generateHashtag(str) {
              str = str.trim();
              if (str === "") {
                return false;
              }
              const words = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
              const hashtag = "#" + words.join('');
              if (hashtag.length > 140) {
                return false;
              }
              return hashtag;
            }
            

module.exports = generateHashtag;
