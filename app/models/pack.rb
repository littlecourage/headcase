class Pack < ApplicationRecord

  validates :title, presence: true, uniqueness: true
  validates :category, presence: true
  validates :length, presence: true

  has_one_attached :thumbnail

  belongs_to :category,
    foreign_key: :category_id,
    class_name: "Category"

  has_many :user_packs,
    foreign_key: :pack_id,
    class_name: 'UserPack'

  has_many :meditations,
    foreign_key: :pack_id,
    class_name: "Meditation"

  def is_user_pack?
    return self.user_packs.where(user_id: current_user.id)
  end

end