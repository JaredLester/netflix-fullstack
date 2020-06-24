# json.extract! @videos, :id, :title
# json.picture url_for(@videos.picture)
# json.video url_for(@videos.video)

@videos.each do |video|
    json.set! video.id do
        json.extract! video, :id, :title, :description, :year
        json.picture url_for(video.picture)
        json.video url_for(video.video)
    end
end


# json.array! @videos do |video|
#     json.extract! video, :id, :title
#     json.picture url_for(video.picture)
#     json.video url_for(video.video)
# end