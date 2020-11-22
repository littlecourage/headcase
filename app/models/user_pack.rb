class UserPack < ApplicationRecord

  validates :user_id, presence: true
  validates :pack_id, presence: true

  validates :pack_id, uniqueness: { scope: :user_id }

  belongs_to :user
  has_one :pack


end