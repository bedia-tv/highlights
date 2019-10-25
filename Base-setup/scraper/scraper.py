import youtube_dl 
import json

# only works for single videos at the moment and not embedded
#method for getting the url and title from the page the user is on
#requires url pulled from the user
 
def Extractor(url):
    ydl = youtube_dl.YoutubeDL({'outtmpl': '%(id)s%(ext)s'})
    video = {'URL': '', 'Title': ''}
    with ydl:
        result = ydl.extract_info(
            url,
            download=False  # We just want to extract the info
        )

    video['URL'] = result["webpage_url"]
    video['Title'] = result["title"]

    return video

# below will be how the data is changed to JSON format and how to invoke
# the function

#Dict = Extractor("https://www.facebook.com/oldrow/videos/801877526899085/")
#JSON = json.dumps(Dict)
