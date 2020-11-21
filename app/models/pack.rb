class Pack < ApplicationRecord

  validates :title, presence: true, uniqueness: true
  validates :category, presence: true

  has_one_attached :thumbnail
  belongs_to :category

end