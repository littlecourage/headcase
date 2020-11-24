class Pack < ApplicationRecord

  validates :title, presence: true, uniqueness: true
  validates :category, presence: true

  has_one_attached :thumbnail

  belongs_to :category,
    foreign_key: :category_id,
    class_name: "Category"

  has_many :user_packs

  has_many :meditations,
    foreign_key: :pack_id,
    class_name: "Meditation"

end