class Video < ApplicationRecord

    validates :title, :year, :description, presence: true

    has_one_attached :picture
    has_one_attached :video


end
