json.extract! @video, :id, :title
json.picture url_for(@video.picture)
json.video url_for(@video.video)